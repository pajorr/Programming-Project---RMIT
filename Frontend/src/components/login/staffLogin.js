import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import {Link} from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import useStyles from './userLogin.css';

class Login extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            email: {},
            password: {}
        };

        this.handleChange = this.handleChange.bind(this);
        this.loginUser = this.loginUser.bind(this);
    }

    loginUser() {
        return fetch('http://157.230.244.234/api/stafflogin', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: this.state.email,
                password: this.state.password
            })
        }).then(function res(response) {
            return response.json();
        }).then(token => {
            const tokenString = JSON.stringify(token);
            localStorage.setItem("stafftoken", JSON.parse(tokenString).data.token);
            localStorage.setItem("staffid", JSON.parse(tokenString).data.user.id);
            localStorage.setItem("staffname", JSON.parse(tokenString).data.user.name);
            window.location.reload();
        })
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return(
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={useStyles.paper}>
                    <Typography component="h1" variant="h5">
                        Staff Sign in
                    </Typography>
                    <form className={useStyles.form} noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            style={{borderColor: "#00c853 !important"}}
                            onChange={this.handleChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={this.handleChange}
                        />
                        <Button component={Link} to="/staff"
                                type="submit"
                                fullWidth
                                variant="contained"
                                className={useStyles.submit}
                                onClick={this.loginUser}
                        >
                            Sign In
                        </Button>
                        <Grid container>
                            <Grid item>
                                <Link href="#" variant="body2" to="/staffregister">
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
            </Container>
        )
    }
}



export default Login;