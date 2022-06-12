import { Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import React from "react";
import { BannerContainer, BannerContent, BannerDescription, BannerImage, BannerPaper, BannerTitle } from "../../styles/banner";

const Banner = () => {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <BannerContainer>
      <BannerPaper>
        <BannerImage src='/images/banner/d0.jpg' />
      </BannerPaper>
      <BannerContent>
        <Typography variant="h6">With More Than five years of experience</Typography>
        <BannerTitle variant="h3">
          Band new Projects
        </BannerTitle>

         <BannerDescription variant="subtitle">
          Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo
          tempor incididunt ut labore et dolore magna
        </BannerDescription>
{/*
        <BannerShopButton color="primary">Shop Now</BannerShopButton> */}
      </BannerContent>
    </BannerContainer>
  );
};

export default Banner;
