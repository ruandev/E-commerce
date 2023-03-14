import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import './styles/index.css'
import { ChakraProvider } from '@chakra-ui/react'
import MainRoutes from './router'
import { ProductProvider } from './context/ProductContext';
import { DiscardChangesProvider } from './context/DiscardChanges';
import { StorageProvider } from './context/StorageContext';
import { ProductToEditProvider } from './context/ProductToEdit';
import { SearchProvider } from './context/SearchContext';
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <ProductProvider>
          <DiscardChangesProvider>
            <StorageProvider>
              <ProductToEditProvider>
                <SearchProvider>
                  <MainRoutes />
                </SearchProvider>
              </ProductToEditProvider>
            </StorageProvider>
          </DiscardChangesProvider>
        </ProductProvider>
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
)
