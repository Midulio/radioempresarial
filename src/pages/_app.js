import { ApolloProvider } from '@apollo/client/react/components';
import client from '../../lib/apollo'; // Esta ruta es la correcta para tu estructura de carpetas

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;