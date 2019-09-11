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
}));

export class mapHome extends React.Component {
    render() {


        const cards = [1, 2, 3];
        return(
            <React.Fragment>
                <CssBaseline />
                <main>
                    {/* Hero unit */}
                    <div className={useStyles.heroContent}>
                        <Container maxWidth="sm">
                            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                                GoCar
                            </Typography>
                            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                                Something short and leading about the collection below—its contents, the creator, etc.
                                Make it short and sweet, but not too short so folks don&apos;t simply skip over it
                                entirely.
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
                    <Container className={useStyles.cardGrid} maxWidth="md">
                        {/* End hero unit */}
                        <Grid container spacing={4}>
                            {cards.map(card => (
                                <Grid item key={card} xs={12} sm={6} md={4}>
                                    <Card className={useStyles.card}>
                                        <CardMedia
                                            className={useStyles.cardMedia}
                                            image="https://source.unsplash.com/random"
                                            title="Image title"
                                        />
                                        <CardContent className={useStyles.cardContent}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Heading
                                            </Typography>
                                            <Typography>
                                                This is a media card. You can use this section to describe the content.
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small" color="primary">
                                                View
                                            </Button>
                                            <Button size="small" color="primary">
                                                Edit
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                    <Map
                        google={this.props.google}
                        zoom={8}
                        style={mapStyles}
                        initialCenter={{lat: -37.8083605, lng: 144.9646012}}
                    >
                        <Marker position={{ lat: -37.8083605, lng: 144.9646012}}/>
                    </Map>
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
    width: '80%',
    height: '80%',
    marginLeft: '150px',
    marginTop: '20px',
    marginBottom: '200px'
};

export default GoogleApiWrapper({
    apiKey: 'AIzaSyBMvbu73pJlnSlCobcEH9MgOVwXrv8dyKc'
})(mapHome);
