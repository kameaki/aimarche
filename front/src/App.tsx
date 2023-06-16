import { BrowserRouter } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { ChakraProvider } from '@chakra-ui/react';

import { Router } from './router/router';
import theme from './theme/theme';

function App() {
  return (
    <>
      <RecoilRoot>
        <ChakraProvider theme={theme}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </ChakraProvider>
      </RecoilRoot>
    </>
  );
}

export default App;
