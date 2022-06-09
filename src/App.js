import { ThemeProvider } from "@mui/material";
import { Button, Container } from "@mui/material";
import { useEffect } from "react";
import theme from "./styles/theme";
import "./App.css";
import Appbar from "./components/appbar";

function App() {

useEffect(() => {
  document.title = "Anubhav Design Atelier"
}, [])


  return (
    <ThemeProvider theme={theme}>
      <div className="background">
        <div className="d1"></div>
        <div className="d2"></div>
        <div className="studio">
         <Container 
         sx = {{ maxWidth: 'xl', background: 'inherit'}}
         >
           <Appbar /> 
           {/* 
           banner 
           promotion
           title
           producgts
           footer
           drawer
           */}


           <Button variant="contained">button</Button>
         </Container>
        </div>
      </div>
      </ThemeProvider>
  );
}

export default App;
