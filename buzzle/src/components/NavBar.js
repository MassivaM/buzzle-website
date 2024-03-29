import React, { Component } from "react";
import PropTypes from "prop-types";
import {
  AppBar,
  Toolbar,
  Typography,
  List,
  ListItem,
  withStyles,
  Grid,
  SwipeableDrawer,
} from "@material-ui/core";

import buzzle from "../assets/images/buzzle.svg";

const styleSheet = {
  root: {
    padding: 0,
    margin: 0,
  },

  list: {
    width: 100,
  },
  padding: {
    paddingRight: 30,
    cursor: "pointer",
  },

  sideBarIcon: {
    padding: 0,
    color: "white",
    cursor: "pointer",
  },
  logo: {
    padding: 0,
    margin: 0,
  },
  list: {},
  buttons: {
    marginRight: "auto",

    color: "black",
  },
  button: {
    margin: 11,
    fontSize: 15,
  },
  links: {
    color: "#0049B8",
    padding: 0,
    textDecoration: "none",
    "&:hover": {
      color: "#6c5ce7",
    },
  },
  links2: {
    color: "black",
    padding: 0,
    textDecoration: "none",
    "&:hover": {
      color: "#70a1ff",
    },
  },
  register: {
    color: "white",
    backgroundColor: "#aa4a40",

    "&:hover": {
      backgroundColor: "white",
    },
  },
  image: {
    marginLeft: "auto",
    marginRight: "auto",
  },
};

//array with nav bar parts
const navLinks = [
  {
    title: "Home",
    path: "/",
  },
];

class ResAppBar extends Component {
  constructor(props) {
    super(props);
    this.state = { drawerActivate: false, drawer: false };
    this.createDrawer = this.createDrawer.bind(this);
    this.destroyDrawer = this.destroyDrawer.bind(this);
  }

  componentWillMount() {
    if (window.innerWidth <= 200) {
      this.setState({ drawerActivate: true });
    }

    window.addEventListener("resize", () => {
      if (window.innerWidth <= 200) {
        this.setState({ drawerActivate: true });
      } else {
        this.setState({ drawerActivate: false });
      }
    });
  }

  //Small Screens
  createDrawer() {
    const { classes } = this.props;
    return (
      <div className={styleSheet.root}>
        <AppBar
          position="static"
          style={{
            margin: 0,
            padding: 0,
            background: "transparent",
            boxShadow: "none",
            height: 60,
          }}
        >
          <Toolbar style={{ background: "transparent" }}></Toolbar>
        </AppBar>
      </div>
    );
  }

  //Larger Screens
  destroyDrawer() {
    const { classes } = this.props;
    return (
      <AppBar
        position="static"
        style={{
          flexGrow: 0,
          margin: 0,
          padding: 0,
          background: "white",

          height: 0,
        }}
      >
        <Toolbar
          position="static"
          style={{
            background: "white",
            alignContent: "center",
            position: "static",
          }}
        >
          <img
            style={{ width: 46, height: 65, paddingTop: 30, marginLeft: 30 }}
            src={buzzle}
          ></img>
        </Toolbar>
      </AppBar>
    );
  }

  render() {
    return (
      <div>
        {this.state.drawerActivate ? this.createDrawer() : this.destroyDrawer()}
      </div>
    );
  }
}

ResAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(ResAppBar);
