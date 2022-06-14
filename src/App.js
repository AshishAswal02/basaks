import { Box, ThemeProvider, Typography } from "@mui/material";
import { Container } from "@mui/material";
import { useEffect } from "react";
import theme from "./styles/theme";
import "./App.css";
import Appbar from "./components/appbar";
import Banner from "./components/banner";
import Promotions from "./components/promotions";
import Items from "./components/items";
import Footer from "./components/footer";

function App() {
  useEffect(() => {
    document.title = "Anubhav Design Atelier";
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ maxWidth: "xl", background: "inherit" }}>
        <Appbar />
        <Banner />
        <Promotions />
        <Box display="flex" justifyContent={'center'} my={3}>
          <Typography variant="h4">Our projects</Typography>
        </Box>
          <Items  />
          <Footer />

        {/* 
           title
           drawer
           */}
      </Container>
      {/* </div>
      </div> */}
    </ThemeProvider>
  );
}

export default App;
