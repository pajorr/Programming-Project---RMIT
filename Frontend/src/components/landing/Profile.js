import React from 'react';
import PropTypes from 'prop-types';
import userIcon from './../../rsc/user.png';
import staffIcon from './../../rsc/staff.png';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/styles';
import Button from "@material-ui/core/Button/Button";
import { Link } from "react-router-dom";

const styles = theme => ({
  bigAvatar: {
    margin: 10,
    width: 220,
    height: 220,
  },
});
class Profile extends React.Component{


  render()
  {
    const { classes } = this.props;
    return (
    <Grid container justify="center" alignItems="center">
      <Avatar alt={localStorage.getItem("userName")} src={userIcon} className={classes.bigAvatar} />
    </Grid>
    )
}
  }
  


Profile.propTypes = {
    classes: PropTypes.object.isRequired,
};


export default withStyles(styles)(Profile);
