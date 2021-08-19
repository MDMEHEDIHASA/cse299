import React, { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { IconButton } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/list";
import ListItem from "@material-ui/core/ListItem";
import GD from "../images/GD.png";
import "../css/sidebar.css";

const Sidebar = () => {
  const [state, setState] = useState({
    left: false,
  });
  const toogleDrawer = (anchor, open) => (e) => {
    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => {
    <div></div>;
  };
  return (
    <div>
      <React.Fragment>
        <IconButton onClick={toogleDrawer("left", true)}>
          <MenuIcon />
        </IconButton>
        <Drawer
          className="drawer"
          open={state["left"]}
          onClose={toogleDrawer("left", false)}
          anchor={"left"}
        >
          <List>
            <ListItem>
              <img src={GD} style={{width:'25%'}} alt="Google Drive" />
            </ListItem>
          </List>
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default Sidebar;
