import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import SignIn from './pages/Sign-in'
import { ChakraProvider } from '@chakra-ui/react'
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <ChakraProvider>
  <React.StrictMode>
    <SignIn />
    </React.StrictMode>
    </ChakraProvider>
)
