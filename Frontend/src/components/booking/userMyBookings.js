import React from 'react';
//0. import propTypes
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';
import Grid from "@material-ui/core/Grid/Grid";
import Button from "@material-ui/core/Button/Button";
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import Divider from "@material-ui/core/Divider/Divider";
import InboxIcon from '@material-ui/icons/Inbox';
import { Link } from 'react-router-dom';

//1. declare style as function var
const styles = theme => ({
    root: {
        width: '100%',
        backgroundColor: '#ffffff',
    },
    listStyle: {
        textAlign: 'center'
    }
});

class MyBooking extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            bookingList: [],
        }
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

    returnCar(carid, id) {
        let today = new Date();
        let date = today.getFullYear()+"-"+("0" + (today.getMonth() + 1)).slice(-2)+"-"+("0" + today.getDate()).slice(-2);

        return fetch('http://157.230.244.234/api/returncars/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_id: localStorage.getItem("userId"),
                car_id: carid,
                book_id: id,
                date_return: date
            })
        }).then(function res(response) {
            return response.json();
        }).then(() => {
            window.location.reload();
        })
    }

    componentDidMount() {
        this.getBookingList();
    }

    renderBookingList() {

        //2. declare prop constant
        const { classes } = this.props;
        return this.state.bookingList.map(obj =>
            (
                <div className={classes.root}>
                    <List component="nav" aria-label="main mailbox folders">
                        <ListItem button>
                            <ListItemIcon>
                                <InboxIcon />
                            </ListItemIcon>
                            <ListItemText primary={"Car Name: " + obj.car_name} />
                            <ListItemText secondary={"Car Plate: " + obj.plate_number} />
                            <ListItemText secondary={"Car Image: " + obj.image} />
                            <ListItemText secondary={"Price: "  + obj.price} />
                            <ListItemText secondary={"Duration: " + obj.duration} />
                            <ListItemText secondary={"Booked By: " + obj.name} />
                            <ListItemText secondary={"Returned?: " + obj.returned}/>
                            <Button onClick={() => this.returnCar(obj.car_id, obj.id)}>Return</Button>
                        </ListItem>
                    </List>
                    <Divider />
                </div>
            )
        )
    }

    render() {
        return(
            <div>
                <List component="nav" aria-label="main mailbox folders">
                    <Link to="/">
                        <Button>◀ Back</Button>
                    </Link>
                </List>
                {this.renderBookingList()}
            </div>
        )
    }
}

//3. declare as proptype
MyBooking.propTypes = {
    classes: PropTypes.object.isRequired,
};

//4. use this export statement
export default withStyles(styles)(MyBooking);