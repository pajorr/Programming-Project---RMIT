import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import axios from 'axios';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: '25%',
    float: 'right'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));



class CarReviewCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: false,
            carList: [],
            loading: true,
            selectedCar: {}
            
        }
        this.handleExpandClick = this.handleExpandClick.bind(this);
    }

  handleExpandClick() {
    if(this.state.expanded == false) {
        this.setState({...this.state.expanded, expanded: true});
    } else {
        this.setState({...this.state.expanded, expanded: false});
    }
  }

  getCar() {
      
    fetch('http://157.230.244.234/api/cars/', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    }).then(res => res.json())
        .then(data => {
            const carData = JSON.stringify(data);
            const obj = JSON.parse(carData);
            // const resp =  axios.get(`http://157.230.244.234/api/cars/1`);
            this.setState({...this.state.carList, carList: obj}); //how to set a state value
            // this.setState({...this.state.carList, selectedCar: obj})
            console.log(this.state.selectedCar);
            this.setState({data, loading: false});
        })
        .catch(err => console.log(err));
};

    componentDidMount() {
        this.getCar();
    }

    renderCarList() {
        return this.state.carList.map(obj => (<h1>{obj.id}</h1>));
    }
render() {

if(this.state.loading) {
        return 'Loading...'
}
  return (
    <Card className={useStyles.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={useStyles.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title = {this.state.carList.id}
        subheader="September 14, 2016"
      />
      <CardMedia
        className={useStyles.media}
        image="/static/images/cards/paella.jpg"
        title="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(useStyles.expand, {
            [useStyles.expandOpen]: this.state.expanded,
          })}
          onClick={this.handleExpandClick}
          aria-expanded={this.state.expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
            minutes.
          </Typography>
          <Typography paragraph>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
            heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
            browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
            and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
            pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
            without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
            medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
            again without stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don’t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
            {this.renderCarList()}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
        }
}

export default CarReviewCard;