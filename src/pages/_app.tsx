import type { AppProps } from 'next/app';
import { QueryClientProvider, QueryClient } from 'react-query';

import { ContextUserProvider } from '@Context/contextUser';
import Header from '@Components/Header';
import Footer from '@Components/Footer';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const client = new QueryClient();

  return (
    <QueryClientProvider client={client}>
      <ContextUserProvider>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </ContextUserProvider>
    </QueryClientProvider>
  );
};

export default App;
