import React, { Component } from 'react';
import './App.css';
import 'semantic-ui-css/semantic.min.css';
import { BrowserRouter as Router, Route, NavLink, Redirect } from "react-router-dom";
import Conversions from './Conversions';
import PasswordCracking from './PasswordCracking';
import RotateN from './RotateN';
import hashes from './hashes';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems, secondaryListItems } from './listItems';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import {ArrowRightAlt, Cached, Lock, LockOpen, Image} from '@material-ui/icons';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import SimpleLineChart from './SimpleLineChart';
import SimpleTable from './SimpleTable';
import * as Colors from '@material-ui/core/colors'

const drawerWidth = 240;

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#e4dde8',
      main: '#f6f6f6',
      dark: '#fefffe',
      contrastText: '#000000',
    },
    secondary: {
      light: '#e4dde8',
      main: '#e4dde8',
      dark: '#e4dde8',
      contrastText: '#000',
    },
  },
});

const styles = theme => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    // marginLeft: drawerWidth,
    // width: `calc(100% - ${drawerWidth}px)`,
    // transition: theme.transitions.create(['width', 'margin'], {
    //   easing: theme.transitions.easing.sharp,
    //   duration: theme.transitions.duration.enteringScreen,
    // }),
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9,
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto',
  },
  chartContainer: {
    marginLeft: -22,
  },
  tableContainer: {
    height: 320,
  },
  h5: {
    marginBottom: theme.spacing.unit * 2,
  },
});

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }

  // render() {
  //   let self = this;
  //   return (
  //     <Router>
  //       <div className="App">
  //         <header className="App-header">
  //           <nav>
  //             <div className="navbar">
  //               <div className="navheader">Cybercastor Toolkit</div>
  //               <NavLink to="/conversions" activeClassName="navbutton-selected" className="navbutton">Conversions</NavLink>
  //               <NavLink to="/hash-conversions" activeClassName="navbutton-selected" className="navbutton">Hash Conversions</NavLink>
  //               <NavLink to="/rotate-n" activeClassName="navbutton-selected" className="navbutton">Rotate N</NavLink>
  //               <NavLink to="/password-cracking" activeClassName="navbutton-selected" className="navbutton">Password Cracking</NavLink>
  //             </div>
  //           </nav>
  //           <Route path="/" exact component={Conversions} />
  //           <Route path="/rotate-n/" component={RotateN} />
  //           <Route path="/hash-conversions/" component={hashes} />
  //           <Route path="/conversions" component={Conversions} />
  //           <Route path="/password-cracking/" component={PasswordCracking} />
  //           <Route path="/users/" component={Conversions} />
  //         </header>
  //       </div>
  //     </Router>
  //   );
  // }

  state = {
    open: true,
    to: '/'
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;
    let self = this;

    return (
        <Router>
        <MuiThemeProvider theme={theme}>
        <div className={classes.root}>
          <CssBaseline />
          <AppBar
              position="fixed"
              title={<img src="https://www.sosfactory.com/wp-content/uploads/2017/01/don-castor-mascot-min.png"/>}
              className={classNames(classes.appBar, this.state.open && classes.appBarShift)}
          >
            <Toolbar disableGutters={!this.state.open} className={classes.toolbar}>
              <IconButton
                  color="inherit"
                  aria-label="Open drawer"
                  onClick={this.handleDrawerOpen}
                  className={classNames(
                      classes.menuButton,
                      this.state.open && classes.menuButtonHidden,
                  )}
              >
                <MenuIcon />
              </IconButton>
              <Typography
                  component="h1"
                  variant="h6"
                  color="inherit"
                  noWrap
                  className={classes.title}
              >
                <img style={{width: 30, height: 30, position: 'relative', top: '8px'}} src="https://www.sosfactory.com/wp-content/uploads/2017/01/don-castor-mascot-min.png"/>
                &nbsp; &nbsp;&nbsp;Cybercastor Toolkit
              </Typography>
              <IconButton color="inherit">
                <Badge badgeContent={4} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton>
            </Toolbar>
          </AppBar>
          <Drawer
              variant="permanent"
              classes={{
                paper: classNames(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
              }}
              open={this.state.open}
          >
            <div className={classes.toolbarIcon}>
              <IconButton onClick={this.handleDrawerClose}>
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider />
            <List>
              <div>
                <ListItem button onClick={()=>{ self.setState({to: '/conversions'})}}>
                  <ListItemIcon>
                    <ArrowRightAlt />
                  </ListItemIcon>
                  <ListItemText primary="Conversions" />
                </ListItem>
                <ListItem button onClick={()=>{ self.setState({to: '/rotate-n'})}}>
                  <ListItemIcon>
                    <Cached />
                  </ListItemIcon>
                  <ListItemText primary="Rotate N" />
                </ListItem>
                <ListItem button onClick={()=>{ self.setState({to: '/hash-conversions'})}}>
                  <ListItemIcon>
                    <Lock />
                  </ListItemIcon>
                  <ListItemText primary="Hash Conversions" />
                </ListItem>
                <ListItem button onClick={()=>{ self.setState({to: '/password-cracking'})}}>
                  <ListItemIcon>
                    <LockOpen />
                  </ListItemIcon>
                  <ListItemText primary="Password Cracking" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <Image />
                  </ListItemIcon>
                  <ListItemText primary="Stego" />
                </ListItem>
              </div>
            </List>
            <Divider />
            <List>
              <div>
                <ListSubheader inset>Status</ListSubheader>
                <ListItem button>
                  <ListItemIcon>
                    <AssignmentIcon />
                  </ListItemIcon>
                  <ListItemText primary="Server Health" />
                </ListItem>
                <ListItem button>
                  <ListItemIcon>
                    <AssignmentIcon />
                  </ListItemIcon>
                  <ListItemText primary="Logs" />
                </ListItem>
              </div>
            </List>
          </Drawer>
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Route path="/" exact component={Conversions} />
            <Route path="/rotate-n/" component={RotateN} />
            <Route path="/hash-conversions/" component={hashes} />
            <Route path="/conversions" component={Conversions} />
            <Route path="/password-cracking/" component={PasswordCracking} />
            <Route path="/users/" component={Conversions} />
            {(() => {
              return <Redirect to={self.state.to} />
            })()}
          </main>
        </div>
        </MuiThemeProvider>
        </Router>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
