export interface PropsFormUser {
  typeForm: 'login' | 'register';
}

export type StateForm = 'INITIAL' | 'READYFORSUBMIT' | 'LOADING' | 'COMPLETED';

export interface InitialState {
  email: string;
  password: string;
  stateForm: StateForm;
  errors: {
    error: string;
    email: string;
    password: string;
  };
}

export type FormAction =
  | {
      type: 'SET_FIELD';
      name: string;
      value: string;
    }
  | {
      type: 'SET_ERROR';
      nameError: string;
      message: string;
    }
  | {
      type: 'CLEAN_ERROR';
      nameError: string;
    }
  | {
      type: 'SET_STATE_FORM';
      newState: StateForm;
    };
