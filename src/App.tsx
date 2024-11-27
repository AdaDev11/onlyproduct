import React from 'react';
import { MantineProvider } from '@mantine/core';
import Products from './components/Products/product.tsx'

const App: React.FC = () => {
  return (
    <MantineProvider >
      <Products />
    </MantineProvider>
  );
};

export default App;