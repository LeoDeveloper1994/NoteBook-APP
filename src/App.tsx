import { QueryClientProvider } from '@tanstack/react-query';
import { queryClient } from './utils/queryClient';
import Routing from './components/router/Routing';

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Routing />
    </QueryClientProvider>
  );
};

export default App;
