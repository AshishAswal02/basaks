import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";

import { Colors } from "../theme";

 export const FooterTitle = styled(Typography)(() => ({
    textTransform: 'uppercase',
    marginBottom: '1rem',
 }))

 export const FooterBox = styled(Box)(() => ({
    background: Colors.shaft,
    marginTop: '3rem',
    padding: "1rem",
    color: Colors.white,
    fontSize:  {xs: '12px', md:'14px'},
 }))