import { Typography } from "@mui/material";
import { ItemMetaWrapper } from "../../styles/items";
export default function ItemMeta({ item, matches }) {
    return (
      <ItemMetaWrapper>
        <Typography variant={matches ? "h6" : "h5"} lineHeight={2}>
          {item.name}
        </Typography>
        <Typography variant={matches ? "caption" : "body1"}>
          {item.area}
        </Typography>
      </ItemMetaWrapper>
    );
}