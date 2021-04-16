import React, { useReducer, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';

import { PropsFormUser, InitialState, FormAction } from './types';
import FormField from './components/FormField';
import Btn from './components/Btn';
import { useUser } from 'context/contextUser';

const initialState: InitialState = {
  email: '',
  password: '',
  stateForm: 'INITIAL',
  errors: {
    error: '',
    email: '',
    password: '',
  },
};

const formReducer = (state: InitialState, action: FormAction) => {
  switch (action.type) {
    case 'SET_FIELD':
      return { ...state, [action.name]: action.value };

    case 'SET_ERROR':
      return {
        ...state,
        errors: { ...state.errors, [action.nameError]: action.message },
      };

    case 'CLEAN_ERROR':
      return {
        ...state,
        errors: { ...state.errors, [action.nameError]: '' },
      };

    case 'SET_STATE_FORM':
      return {
        ...state,
        stateForm: action.newState,
      };
    default:
      return initialState;
  }
};

const FormUser: React.FC<PropsFormUser> = ({ typeForm, fetcher }) => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const { setDataUserLocalStorage } = useUser();
  const router = useRouter();

  const loginMutation = useMutation(fetcher(state.email, state.password), {
    onError: () => {
      dispatch({
        type: 'SET_STATE_FORM',
        newState: 'ERROR',
      });
    },
    onSuccess: () => {
      dispatch({
        type: 'SET_STATE_FORM',
        newState: 'COMPLETED',
      });
    },
  });

  const { data, isLoading, isError, error } = loginMutation;

  useEffect(() => {
    if (data && !isError) {
      const userData = {
        token: data.token,
        email: data.user.email,
        firstname: data.user.firstname,
        lastname: data.user.lastaname,
        username: data.user.username,
      };
      setDataUserLocalStorage(userData);
      router.push('/home');
    }
  }, [data]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log('EJECUTANDO EL HANDLESUBMIT');

    e.preventDefault();
    dispatch({
      type: 'SET_STATE_FORM',
      newState: 'LOADING',
    });

    loginMutation.mutate();
  };

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    dispatch({
      type: 'SET_FIELD',
      name,
      value,
    });

    if (name === 'email') {
      //Validate input email
      validateEmail(name, value);
    }

    if (name === 'password') {
      //Validate input password
      validatePassword(name, value);
    }
  };

  const validateEmail = (name: string, value: string) => {
    if (!value) {
      dispatch({
        type: 'SET_ERROR',
        nameError: name,
        message: 'Campo requerido',
      });
      return;
    }

    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (emailRegex.test(value)) {
      dispatch({
        type: 'CLEAN_ERROR',
        nameError: name,
      });
    } else {
      dispatch({
        type: 'SET_ERROR',
        nameError: name,
        message: 'Por favor, ingresa un email válido.',
      });
    }
  };

  const validatePassword = (name: string, value: string) => {
    if (!value) {
      dispatch({
        type: 'SET_ERROR',
        nameError: name,
        message: 'Campo requerido',
      });
      return;
    }

    if (value.length < 6) {
      dispatch({
        type: 'SET_ERROR',
        nameError: name,
        message: 'Tu contraseña debe de tener al menos 6 caracteres',
      });
    } else {
      dispatch({
        type: 'CLEAN_ERROR',
        nameError: name,
      });
    }
  };

  const isDisabled = () => {
    if (
      !state.errors.email &&
      !state.errors.password &&
      !state.errors.error &&
      state.email &&
      state.password
    ) {
      return false;
    } else if (isLoading) {
      return false;
    } else return true;
  };

  return (
    <form className="flex flex-col w-full mt-4" onSubmit={handleSubmit}>
      <FormField
        name="email"
        textLabel="Correo"
        value={state.email}
        onChange={handleChangeInput}
        errorMessage={state.errors.email}
      />
      <FormField
        name="password"
        textLabel="Contraseña"
        value={state.password}
        onChange={handleChangeInput}
        errorMessage={state.errors.password}
      />
      <Btn stateForm={state.stateForm} isDisabled={isDisabled} />
    </form>
  );
};

export default FormUser;
