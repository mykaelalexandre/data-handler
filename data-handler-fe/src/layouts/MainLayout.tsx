import React, { ReactNode } from 'react';
interface MainLayoutProps {
    children: ReactNode;
  }
  
const MainLayout: React.FC = ({ children }) => {
  return (
    <div>
      <header>
        {/* Aqui você pode incluir o cabeçalho da sua aplicação */}
        <h1>Meu App</h1>
      </header>
      <main>
        {/* O conteúdo principal da página será renderizado aqui */}
        {children}
      </main>
      <footer>
        {/* Aqui você pode incluir o rodapé da sua aplicação */}
        <p>Rodapé do meu App</p>
      </footer>
    </div>
  );
}; 

export default MainLayout;
