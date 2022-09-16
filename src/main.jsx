import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App'
import GridSection from './components/GridSection'
import './index.css'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <GridSection />
    </ChakraProvider>
  </React.StrictMode>
)
