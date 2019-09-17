import React from 'react';
import { Map, GoogleApiWrapper, Marker } from 'google-maps-react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import {Link} from 'react-router-dom';

const useStyles = makeStyles(theme => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6)
    },
    gridDirection: {
        direction : 'column'
    }
}));

export class mapHome extends React.Component {
    render() {


        const cards = [1, 2, 3, 4];
        return(
            <React.Fragment>
                <CssBaseline />
                <main>
                    {/* Hero unit */}
                    <div className={useStyles.heroContent}>
                        <Container maxWidth="sm">
                            {/*<Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>*/}
                                {/*GoCar*/}
                            {/*</Typography>*/}
                            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                                Get a ride with Us.
                            </Typography>
                            <div className={useStyles.heroButtons}>
                                <Grid container spacing={2} justify="center">
                                    <Grid item>
                                        <Link href="#" variant="body2" to="/booking">
                                            <Button variant="contained" color="primary">
                                                Book Now
                                            </Button>
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link href="#" variant="body2" to="/register">
                                            <Button variant="outlined" color="primary">
                                                Sign Up
                                            </Button>
                                        </Link>
                                    </Grid>
                                </Grid>
                            </div>
                        </Container>
                    </div>
                    <Container className={useStyles.cardGrid} maxWidth="100%">
                        {/* End hero unit */}
                        <Grid container spacing={2} className={useStyles.gridDirection} marginRight="200px">
                            <Grid item xs={12} sm={6} md={4}>
                                <Map
                                    google={this.props.google}
                                    zoom={8}
                                    style={mapStyles}
                                    initialCenter={{lat: -37.8083605, lng: 144.9646012}}
                                >
                                    <Marker position={{ lat: -37.8083605, lng: 144.9646012}}/>
                                </Map>
                            </Grid>
                        </Grid>
                        {cards.map(card => (
                            <Grid container spacing={2} className={useStyles.gridDirection}  alignItems="flex-start" justify="flex-end">
                                <Grid item key={card} xs={12} sm={6} md={4}>
                                    <Card className={useStyles.card} style={{width: '90%', marginLeft:'50px'}}>
                                        <CardContent className={useStyles.cardContent}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Car
                                            </Typography>
                                            <Typography>
                                                This is a media card.
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small" color="primary">
                                                View
                                            </Button>
                                            <Button size="small" color="primary">
                                                Book
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>

                        </Grid>
                        ))}
                    </Container>
                </main>
                {/* Footer */}
                {/*<footer className={useStyles.footer}>*/}
                    {/*<Typography variant="h6" align="center" gutterBottom>*/}
                        {/*Footer*/}
                    {/*</Typography>*/}
                    {/*<Typography variant="subtitle1" align="center" color="textSecondary" component="p">*/}
                        {/*Something here to give the footer a purpose!*/}
                    {/*</Typography>*/}
                {/*</footer>*/}
                {/* End footer */}
            </React.Fragment>
        )
    }
}


const mapStyles = {
    width: '65%',
    height: '80%',
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBMvbu73pJlnSlCobcEH9MgOVwXrv8dyKc'
})(mapHome);
