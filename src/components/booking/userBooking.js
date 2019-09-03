import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Input from '@material-ui/core/Input';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import FilledInput from '@material-ui/core/FilledInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
    '@global': {
        body: {
            backgroundColor: theme.palette.common.white,
        },
    },
    paper: {
        marginTop: theme.spacing(8),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

class Booking extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            carList: [],
            carSelected: '',
            loading: true,
            userId: ''
        };

        this.getCar = this.getCar.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.bookCar = this.bookCar.bind(this);
    }

    getCar() {
        fetch('http://157.230.244.234/api/cars', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
        }).then(res => res.json())
            .then(data => {
                const carData = JSON.stringify(data);
                const obj = JSON.parse(carData);
                this.setState({...this.state.carList, carList: obj}); //how to set a state value
                console.log(this.state.carList);
                this.setState({data, loading: false});
            })
            .catch(err => console.log(err));
    };

    renderCarList() {
        return this.state.carList.map(obj => (
            <MenuItem value={obj.id}>
                {obj.car_name}
            </MenuItem>
        ));
    }

    bookCar() {
        fetch('http://157.230.244.234/api/books', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                user_id: this.state.userId,
                car_id: this.state.carSelected,
                book_date: '2019-09-03' //change to proper date
            })
        }).then(res => res.json())
            .catch(err => console.log(err));
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    componentDidMount() {
        this.getCar();
    }

    render() {
        if(this.state.loading) {
            return 'Loading...'
        }

        return(
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={useStyles.paper}>
                    <Avatar className={useStyles.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Booking
                    </Typography>
                    <form className={useStyles.form} noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    autoComplete="fname"
                                    name="userId"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    label="User ID"
                                    autoFocus
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControl variant="outlined">
                                    <InputLabel htmlFor="outline-aged-simple">
                                        Age
                                    </InputLabel>
                                    <Select
                                        value={this.state.carSelected}
                                        onChange={this.handleChange}
                                        input={<OutlinedInput labelWidth={976} name="carSelected" id="outline-aged-simple"/>}
                                    >
                                        <MenuItem>
                                            <em>None</em>
                                        </MenuItem>
                                        {this.renderCarList()}
                                    </Select>
                                </FormControl>
                            </Grid>
                        </Grid>
                        <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={useStyles.submit}
                            onClick={this.bookCar}
                        >
                            Book
                        </Button>
                    </form>
                </div>
            </Container>
        )
    }
}

export default Booking;