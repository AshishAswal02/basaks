import { styled } from "@mui/material/styles"
import { Box, Typography, Image, Paper } from "@mui/material"
import { Colors } from "../theme"

export const BannerContainer = styled(Box)( ({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    padding: 0,
    background: Colors.light_gray,
    [theme.breakpoints.down('sm')]: {
        flexDirection : 'column',
        alignItems: 'center'
    }
}));

export const BannerContent = styled(Box)(() => ({
    display: 'flex',
    flexDirection: "column",
    justifyContent: 'center',
    maxWidth: 420,
    padding: 10
}))

export const BannerTitle = styled(Typography)(({ matches, theme }) => ({
    lineHeight: 1.5,
    // fontSize: 50,
    marginBottom: "20px",
    [theme.breakpoints.down('sm')]: {
      fontSize: '42px',    
    }
  }));

  export const BannerDescription = styled(Typography)(({ theme }) => ({
    lineHeight: 1.25,
    letterSpacing: 1.25,
    marginBottom: "3em",
    [theme.breakpoints.down("md")]: {
      lineHeight: 1.15,
      letterSpacing: 1.15,
      marginBottom: "1.5em",
    },
  }));

  export const BannerImage = styled("img")(({ src, theme }) => ({
    src: `url(${src})`,
    height: '100%',
    width: '100%',
    objectFit: 'contain'
    // backgroundImage: `url(${src})`,
    // backgroundRepeat: "no-repeat",
    // backgroundPosition: "center",
    // width: "500px",
    // [theme.breakpoints.down("md")]: {
    //   width: "350px",
    // },
    // [theme.breakpoints.down("sm")]: {
    //   width: "320px",
    //   height: "300px",
    // },
  }));


  export const BannerPaper = styled(Box)(({ theme }) => ({
    backgroundColor: 'inherit',
    width: "500px",
    [theme.breakpoints.down("md")]: {
      width: "350px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "100%",
      height: "300px",
    },
  }));