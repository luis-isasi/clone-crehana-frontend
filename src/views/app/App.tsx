import { useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';

import { useContextAuth } from '@Context/contextAuth';
import LinkPrimary from '@Components/Links/LinkPrimary';
import LearnWithExpertLeaders from './sections/LearnWithExpertLeaders';

const App: React.FC = () => {
  const { user } = useContextAuth();
  const router = useRouter();

  useEffect(() => {
    user && router.replace('/home');
  }, [user]);

  return (
    <>
      <div className="w-full min-h-2xl 2xl:min-h-3xl 2xl:h-3xl relative bg-base-dark flex items-start justify-center lg:justify-start">
        <Image
          objectFit="cover"
          layout="fill"
          loader={({ src }) => `${src}`}
          src="https://images.unsplash.com/photo-1552820728-8b83bb6b773f"
        />
        <section className="z-1 text-white text-center lg:text-left max-w-2xl lg:max-w-md xl:max-w-xl h-auto mt-18 md:mt-32 md:ml-10 lg:ml-13 xl:ml-26 box-border p-5">
          <h6 className="text-3xl lg:text-5xl xl:text-6xl font-extrabold my-4">
            ¡Última semana de Hot Days! Aprende y aplícalo hoy
          </h6>
          <p className="text-lg font-normal my-4">
            +600 cursos online de Diseño a Negocios ¿Qué aprenderás tú?
            ¡Aprovecha hasta 50% dto en la membresía!
          </p>
          <div className="my-10">
            <LinkPrimary href="/" className="py-4 px-8">
              Aprovecha hoy
            </LinkPrimary>
          </div>
        </section>
      </div>
      <LearnWithExpertLeaders />
    </>
  );
};

export default App;
