import React, { Component } from 'react';
import './App.css';

import AddedFurnitureComponent from './AddedFurnitureComponent';

import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';


class App extends Component {
  render() {
    return (
      <div className="App">
        <img height="200" width="200" src="logo.svg"></img>
        <Grid container justify="center" alignItems="center" spacing={24}>
          <Grid item xs={6}>
            <Paper>
                <h2> Add new furniture </h2>
                <form noValidate autoComplete="off">
                  <TextField
                    id="name"
                    label="Name"                    
                    margin="normal"
                    style={{ margin: '0.5rem' }}
                    defaultValue="Green Couch"
                  />

                  <TextField
                    id="material"
                    label="Material"
                    margin="normal"
                    style={{ margin: '0.5rem' }}
                    defaultValue="Leather"
                  />

                  <TextField
                    id="condition"
                    label="Condition"
                    margin="normal"
                    style={{ margin: '0.5rem' }}
                    defaultValue="New"
                  />
                  
                  <Grid container justify="center">
                    <Button style={{ margin: '1rem' }} variant="contained" color="secondary">
                      Add
                    </Button>
                  </Grid>
                </form>
            </Paper>

            <AddedFurnitureComponent />
            
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;
