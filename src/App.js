import { ThemeProvider } from "@mui/material";
import { Container } from "@mui/material";
import { useEffect } from "react";
import theme from "./styles/theme";
import "./App.css";
import Appbar from "./components/appbar";
import Banner from "./components/banner";
import Promotions from "./components/promotions";

function App() {

useEffect(() => {
  document.title = "Anubhav Design Atelier"
}, [])


  return (
    <ThemeProvider theme={theme}>
      {/* <div className="background">
        <div className="d1"></div>
        <div className="d2"></div>
        <div className="studio"> */}
         <Container 
         sx = {{ maxWidth: 'xl', background: 'inherit'}}
         >
           <Appbar /> 
           <Banner /> 
           <Promotions />
           {/* 
           title
           producgts
           footer
           drawer
           */}


         </Container>
        {/* </div>
      </div> */}
      </ThemeProvider>
  );
}

export default App;
