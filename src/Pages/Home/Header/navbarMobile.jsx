import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Grid from "@mui/material/Grid";
import { useNavigate } from "react-router-dom";

const options = ["Who Am I?", "What Have I Programmed?", "What Have I Designed?", "Get In Touch",];
const paths = ["/", "/Portfolio", "/Designs", "mailto:tyler.cavanaugh24@gmail.com"];

const ITEM_HEIGHT = 48;

export default function LongMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  let navigate = useNavigate();
  const routeChange = (index) => {
    let pathway = paths[index];
    navigate(pathway);
  };

  return (
    <Grid edge='false' sx={{ display: { xs: "block", lg: "none" }, alignSelf: "center" }} item sm={1}>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? "long-menu" : undefined}
        aria-expanded={open ? "true" : undefined}
        edge= 'start'
        sx={{ color: "white"}}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          "aria-labelledby": "long-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "fit-content",
          },
        }}
      >
        {options.map((option, index) => (
          <MenuItem
            key={option}
            selected={option === "Pyxis"}
            onClick={() => {
              if (option === "Get In Touch") {
                window.location.href = `mailto:Tyler.Cavanaugh24@gmail.com`;
              } else {
                routeChange(index);
              }
            }
            }
          >
            {option}
          </MenuItem>
        ))}
      </Menu>
    </Grid >
  );
}
