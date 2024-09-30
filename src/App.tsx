import { ErrorBoundary } from 'react-error-boundary';

import Error from './components/Error';
import Router from './Router';
import { GlobalStyles } from './styles/GlobalStyles';

function App() {
  return (
    <ErrorBoundary
      fallbackRender={({ error, resetErrorBoundary }) => {
        return (
          <Error
            message={error.message}
            resetErrorBoundary={resetErrorBoundary}
          />
        );
      }}>
      <GlobalStyles />
      <Router />
    </ErrorBoundary>
  );
}

export default App;
