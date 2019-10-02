import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Grid from "@material-ui/core/Grid/Grid";
import Typography from '@material-ui/core/Typography';
import Profile from "./Profile.js";
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button/Button";
import { Link } from "react-router-dom";
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import Icon from '@material-ui/core/Icon';
import ViewIcon from './../../rsc/staff.png';

const styles = theme => ({
    buttonStyle: {
        background: 'linear-gradient(45deg, #AB9B93 30%, #1A8F65 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(120, 120, 120, .3)',
        color: 'white',
        height: 320,
        width: 480,
        padding: '0 30px',
    },
    gridStyle: {
        textAlign: 'center',
    },
    viewAll:{
        background: 'linear-gradient(45deg, #AB9B93 30%, #1A8F65 90%)',
        border: 0,
        borderRadius: 3,
        color: 'white',
        height: 100,
        width: 120,
        padding: '0 30px',

    },
    welcomeMessage: {

        textAlign: 'center',
        fontFamily: "Arial",
        padding: "30px",
        fontSize: 500,
    },
    root: {
        flexGrow: 1,
      },
    paper: {
        background: 'linear-gradient(45deg, #AB9B93 30%, #1A8F65 90%)',
        border: 0,
        borderRadius: 3,
        boxShadow: '0 3px 5px 2px rgba(120, 120, 120, .3)',
        color: 'white',
        height: 640,
        width: 480,
        padding: '0 40px',
      },
      searchBar: {
        padding: '2px 4px  2px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
      },
      input: {
        flex: 1,
      },
      iconButton: {
        padding: 10,
      },
      divider: {
        height: 28,
        margin: 4,
      },   
});

class UserLanding extends React.Component {

    logoutUser() {
        localStorage.removeItem("stafftoken");
        localStorage.removeItem("staffid");
        localStorage.removeItem("staffname");
    }

    render() {
        const { classes } = this.props;
        return(
            <div>
                <Profile />
                <div className={classes.welcomeMessage}>
                    <Typography variant="h3" style={{fontFamily: "Arial"}}>
                            Welcome <b>{localStorage.getItem("userName")}</b>!
                    </Typography>
                    
                </div>
                <Grid container spacing={2} className={classes.gridStyle}>
                    <Grid item xs={4}>
                        <Grid style={{padding: '0 30px'}}>
                            <Paper className={classes.paper} pl={12}>
                                <Typography variant="h4" style={{fontFamily: "Arial",color: "white"}}>
                                Borrowed Cars
                                </Typography>
                                <Paper className={classes.searchBar}>
                                    <IconButton className={classes.iconButton} aria-label="menu">
                                        <MenuIcon />
                                    </IconButton>
                                    <InputBase
                                        className={classes.input}
                                        placeholder="Search Borrowed Cars"
                                        inputProps={{ 'aria-label': 'search google maps' }}
                                    />
                                    <IconButton className={classes.iconButton} aria-label="search">
                                        <SearchIcon />
                                    </IconButton>
                                    <Divider className={classes.divider} orientation="vertical" />
                                    {/* <IconButton className={classes.iconButton} aria-label="menu">
                                        <MenuIcon />
                                    </IconButton> */}
                                </Paper>
                            
                                <Grid >
                                <Button variant="contained" size="large" className={classes.button} startIcon={<ViewIcon />}>
                                    View All
                                </Button>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Grid item xs={4}>
                        <Grid>
                            <Paper className={classes.paper} pl={12}>
                                <Typography variant="h4" style={{fontFamily: "Arial",color: "white"}}>
                                Returned Cars
                                </Typography>
                                <Paper className={classes.searchBar}>
                                    <IconButton className={classes.iconButton} aria-label="menu">
                                        <MenuIcon />
                                    </IconButton>
                                    <InputBase
                                        className={classes.input}
                                        placeholder="Search Returned Cars"
                                        inputProps={{ 'aria-label': 'search google maps' }}
                                    />
                                    <IconButton className={classes.iconButton} aria-label="search">
                                        <SearchIcon />
                                    </IconButton>
                                    <Divider className={classes.divider} orientation="vertical" />
                                    {/* <IconButton className={classes.iconButton} aria-label="menu">
                                        <MenuIcon />
                                    </IconButton> */}
                                </Paper>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Grid item xs={4}>
                        <Grid>
                            <Paper className={classes.paper} pl={12}>
                                <Typography variant="h4" style={{fontFamily: "Arial",color: "white"}}>
                                Borrowed Cars
                                </Typography>
                                <Paper className={classes.searchBar}>
                                    <IconButton className={classes.iconButton} aria-label="menu">
                                        <MenuIcon />
                                    </IconButton>
                                    <InputBase
                                        className={classes.input}
                                        placeholder="Search Borrowed Cars"
                                        //inputProps={{ 'aria-label': 'search google maps' }}
                                    />
                                    <IconButton className={classes.iconButton} aria-label="search">
                                        <SearchIcon />
                                    </IconButton>
                                    <Divider className={classes.divider} orientation="vertical" />
                                    {/* <IconButton className={classes.iconButton} aria-label="menu">
                                        <MenuIcon />
                                    </IconButton> */}
                                </Paper>
                            </Paper>
                        </Grid>
                    </Grid>
                </Grid>
                
                    {/* <Grid item xs={4}>
                        <Link to={"/"}>
                            <Button
                                className={classes.buttonStyle}
                                onClick={() => this.logoutUser()}
                            >
                                Logout
                            </Button>
                        </Link>
                    </Grid> */}
                
            </div>
        )
    }
}

UserLanding.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserLanding);