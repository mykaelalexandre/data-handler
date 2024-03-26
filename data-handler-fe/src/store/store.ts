import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducers'; // Importe seu rootReducer aqui

// Defina o tipo da raiz do estado
export type RootState = ReturnType<typeof rootReducer>;

// Crie a loja Redux com o rootReducer usando o configureStore
const store = configureStore({
  reducer: rootReducer,
  // Outras configurações opcionais, como middleware, devTools, etc.
});

export default store;
