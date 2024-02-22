import { ChakraProvider } from "@chakra-ui/react";
import './App.css';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";

function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <Header/>
        <Main/>
        <Footer/>
        <Alert/>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
