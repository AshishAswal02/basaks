import { Box, Grid, Typography, ListItemText, List } from "@mui/material";
import { Facebook, Instagram, Twitter, MailOutline} from "@mui/icons-material";
import { FooterBox, FooterTitle } from "../../styles/footer";
// import { Colors } from "../../styles/theme";

export default function Footer() {
  return (
    <FooterBox>
      <Grid container spacing={2} justifyContent='center' >
        <Grid item md={5} lg={6} >
          <FooterTitle variant='body1'>About us</FooterTitle>
          <Typography  variant='caption2'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio possimus eos assumenda, nemo magni impedit reiciendis rem mollitia expedita hic, sequi quaerat ea. Quis, molestias aspernatur. Tenetur natus repellendus perspiciatis.
          </Typography>
          <Box sx={{
            mt: 4,
          }}>
            <MailOutline sx={{m:1}} />
            <Facebook  sx={{m: 1}} />
            <Instagram sx={{m: 1}} />
            <Twitter sx={{m: 1}} />
          </Box>
        </Grid>
        <Grid item sm={5} md={3} lg={2}>
          <FooterTitle variant="body1">information</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                About Us
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Order Tracking
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Privacy &amp; Policy
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Terms &amp; Conditions
              </Typography>
            </ListItemText>
          </List>
        </Grid>
        <Grid item  sm={5} md={3} lg={2}>
          <FooterTitle variant="body1">my account</FooterTitle>
          <List>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Login
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                My Cart
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                My Account
              </Typography>
            </ListItemText>
            <ListItemText>
              <Typography lineHeight={2} variant="caption2">
                Wishlist
              </Typography>
            </ListItemText>
          </List>

        </Grid>
      </Grid>
    </FooterBox>
  );
}
