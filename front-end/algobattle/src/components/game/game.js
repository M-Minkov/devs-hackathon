import React, { useEffect, useState } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import Ide from "./ide";
import Prompt from "./prompt";
import classes from "./game.module.css";
import axios from 'axios';

function Game() {
  const [problemInfoJSON, setProblemInfoJSON] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/problem_info').then( (problemInformation) => {
      setProblemInfoJSON(problemInformation.data);
    })

  }, [])

  function return_text(probleminfo) {
    return (probleminfo.here)
  }

  console.log(problemInfoJSON);


  return (
    <div className={classes.background}>
      <Grid container spacing={2}>
        <Grid item xs>
          {<Prompt
            title={return_text(problemInfoJSON)}
            description={return_text(problemInfoJSON)}
            />}
        </Grid>
        <Grid item xs>
          <Ide />
        </Grid>
      </Grid>
    </div>
  );
}

export default Game;
