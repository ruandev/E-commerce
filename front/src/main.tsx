import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './styles/index.css'
import { ChakraProvider } from '@chakra-ui/react'
import MainRoutes from './router'
import { ProductProvider } from './context/ProductContext';
import { DiscardChangesProvider } from './context/DiscardChanges';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <ProductProvider>
          <DiscardChangesProvider>
            <MainRoutes />
            </DiscardChangesProvider>
      </ProductProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
)
