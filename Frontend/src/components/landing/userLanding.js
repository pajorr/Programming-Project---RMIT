import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Grid from "@material-ui/core/Grid/Grid";
import Profile from "./Profile.js";
import Button from "@material-ui/core/Button/Button";
import { Link } from "react-router-dom";

const styles = theme => ({
    buttonStyle: {
        background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
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
    welcomeMessage: {

        textAlign: 'center',
        fontFamily: "Arial",
        padding: "10px",
    }
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
                   <body> Welcome Back <b>{localStorage.getItem("userName")}</b>!</body>
                </div>
                <Grid container spacing={2} className={classes.gridStyle}>
                    <Grid item xs={4}>
                        <Link to="/mybookings">
                            <Button
                                className={classes.buttonStyle}
                            >
                                My Bookings
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item xs={4}>
                        <Link to="/">
                            <Button
                                className={classes.buttonStyle}
                            >
                                Book A Car
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item xs={4}>
                        <Link to={"/mybookings"}>
                            <Button
                                className={classes.buttonStyle}
                            >
                                Return A Car 
                            </Button>
                        </Link>
                    </Grid>
                    <Grid item xs={4}>
                        <Button
                            className={classes.buttonStyle}
                        >
                            Edit Your Details
                        </Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Button
                            className={classes.buttonStyle}
                        >
                            Settings 
                        </Button>
                    </Grid>
                    <Grid item xs={4}>
                        <Link to={"/"}>
                            <Button
                                className={classes.buttonStyle}
                                onClick={() => this.logoutUser()}
                            >
                                Logout
                            </Button>
                        </Link>
                    </Grid>
                </Grid>
            </div>
        )
    }
}

UserLanding.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(UserLanding);