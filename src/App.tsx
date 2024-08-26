import { CookiesProvider } from 'react-cookie';

import Router from './Router';
import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  return (
    <CookiesProvider>
      <GlobalStyles />
      <Router />
    </CookiesProvider>
  );
}

export default App;
