import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardContent from '@material-ui/core/CardContent';
import { blue } from '@material-ui/core/colors';


const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 40,
    textAlign: "center"
  },
  pos: {
    marginBottom: 12,
  },
  cardContact:{
    textAlign: "center",
    fontSize: 20,
    color: blue

  }
});

export default function Contact() {
  const classes = useStyles();


  return (
    <div className= "cardContact">

  
    <Card className={classes.root} variant="outlined">
      <CardContent>
      <Typography className={classes.title} color="textSecondary" gutterBottom>
          Contact Details
        </Typography>
        <Typography className={classes.cardContact}>
          <p>
            47, 1197 Boylston Street<br>
            </br>
           Boston, Massachusetts, 02215<br></br>
           (857)-8695459<br>
            </br>
            jaiswal.de@northeastern.edu
          </p>
        </Typography>
      </CardContent>
   
    </Card>
    </div>
  );
}