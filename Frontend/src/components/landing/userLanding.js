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
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import PaypalExpressBtn from 'react-paypal-express-checkout';
import { deepOrange, deepPurple } from '@material-ui/core/colors';

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
      vertical: {
        width: 4,
        margin: 4,
      },  
      orangeAvatar: {
        margin: 10,
        color: '#fff',
        backgroundColor: deepOrange[500],
      },
});

class UserLanding extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            bookingList: [],
        }
    }
    logoutUser() {
        localStorage.removeItem("stafftoken");
        localStorage.removeItem("staffid");
        localStorage.removeItem("staffname");
    }

    getBookingList() {
        fetch('http://157.230.244.234/api/books/' + localStorage.getItem("userId"), {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }).then(res => res.json())
            .then(data => {
                const bookData = JSON.stringify(data);
                const obj = JSON.parse(bookData);
                this.setState({...this.state.bookingList, bookingList: obj});
                console.log(this.state.bookingList);
            })
            .catch(err => console.log(err));
    }

    componentDidMount() {
        this.getBookingList();
    }

    checkPaid(obj) {
        if(obj.returned === false) {
            return(
                <div>
                    <Button onClick={() => this.returnCar(obj.car_id, obj.id)}>Return</Button>
                </div>
            )
        }

        if(obj.returned === true && obj.paid === true) {
            return(
                <div>
                    Paid
                </div>
            )
        }

        else {
            const client = {
                sandbox:    'AbqSx8i-kX1D6W2hfNaxJpw0QyoYM_YWp78WuJBHqA2HTfNeoheZDTWR6JNJcCQc3r07hW-tN3cXNqYI',
                production: 'YOUR-PRODUCTION-APP-ID',
            };
            return(
                    <div>
                        <PaypalExpressBtn client={client} currency={'AUD'} total={obj.total_price} onSuccess={() => this.setPaid(obj)}/>
                    </div>
            )
        }
    }
    renderList(obj){
        if(obj.returned === true && obj.paid === true) 
        {
            
        }

    }
    renderBorrowedList() {

        //2. declare prop constant
        const { classes } = this.props;
        return this.state.bookingList.map(obj =>
            (
                <div className={classes.root}>
                        <ListItem alignItems="flex-start">
                                        <ListItemAvatar>
                                        <Avatar alt={obj.car_name} src={obj.image} />
                                        </ListItemAvatar>
                                        <ListItemText
                                        primary={obj.car_name}
                                        secondary={
                                                    <React.Fragment>
                                                        <Typography
                                                            component="span"
                                                            variant="body2"
                                                            className={classes.inline}
                                                            color="textPrimary"
                                                        >
                                                            {obj.plate_number}
                                                        </Typography>
                                                        {obj.total_price} | {obj.price} | {obj.name}
                                                        <Avatar className={classes.orangeAvatar}>$ {obj.price}</Avatar>
                                                    </React.Fragment>
                                                    }                                        
                                        />
                                    <Grid>  
                                        <Divider orientation="vertical" />
                                    </Grid>
                                    
                                    {this.checkPaid(obj)}
                        </ListItem>                    
                    <Divider />
                </div>
            )
        )
    }

    renderReturnedList() {

        //2. declare prop constant
        const { classes } = this.props;
        
        return this.state.bookingList.map(obj =>
            (
                
                    <div className={classes.root}>
                            
                            <ListItem alignItems="flex-start">
                                            <ListItemAvatar>
                                            <Avatar alt={obj.car_name} src={obj.image} />
                                            </ListItemAvatar>
                                            <ListItemText
                                            primary={obj.car_name}
                                            secondary={
                                                        <React.Fragment>
                                                            <Typography
                                                                component="span"
                                                                variant="body2"
                                                                className={classes.inline}
                                                                color="textPrimary"
                                                            >
                                                                {obj.plate_number}
                                                            </Typography>
                                                            {obj.total_price} | {obj.price} | {obj.name}
                                                            <Avatar className={classes.orangeAvatar}>$ {obj.price}</Avatar>
                                                        </React.Fragment>
                                                        }                                        
                                            />
                                        <Grid>  
                                            <Divider orientation="vertical" />
                                        </Grid>
                                        
                                        {this.checkPaid(obj)}
                            </ListItem>                    
                        <Divider />
                    </div>
                
            )
        )
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
                                <List>
                                    {this.renderBorrowedList()}
                                </List>
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
                                    <List>
                                        {this.renderReturnedList()}
                                    </List>
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