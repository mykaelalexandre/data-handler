// App.tsx

import React from 'react';
import { Provider } from 'react-redux';
import MainLayout from './layouts/MainLayout'; // Importe o layout principal da sua aplicação
import store from './store/store';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <MainLayout />
    </Provider>
  );
}

export default App;
