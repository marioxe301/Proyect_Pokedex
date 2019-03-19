import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';


const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      
      paddingBottom: theme.spacing.unit * 1,
      height: 'auto',
      width: 200,
    },
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },
    button: {
        margin: theme.spacing.unit,
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 16,
        padding: '6px 12px',
        border: '1px solid',
        lineHeight: 1.5,
        backgroundColor: '#007bff',
        borderColor: '#007bff',
        color: 'white',
        
    },
    division:{
      position: 'absolute',
      top: '0%',
      right: '0%'
    }
});

class AddPokemon extends Component{
  constructor(props){
    super(props);
    this.state = {
      name:'',
      image:'',
      Type:'',
      Height: 0,
      Weight:0,
      Gender:'',
      CatchR: '',
    }
  }

  handleChange = (Name,event) =>{
    this.setState({ [Name]: event.target.value });
  }

  render(){
    const {classes} = this.props;
    return(
      <div className={classes.division}> 
        <Paper className={classes.root}>
          <form>
            <TextField
            label="Pokemon Name"
            className={classes.textField}
            value={this.state.name}
            onChange={this.handleChange.bind(this,'name')}
            margin="normal"
            />
            <br/>
            <TextField
            label="Pokemon ImageURL"
            className={classes.textField}
            value={this.state.image}
            onChange={this.handleChange.bind(this,'image')}
            margin="normal"
            />
            <br/>
            <TextField
            label="Type"
            className={classes.textField}
            value={this.state.Type}
            onChange={this.handleChange.bind(this,'Type')}
            margin="normal"
            />
            <br/>
            <TextField
            label="Height"
            className={classes.textField}
            value={this.state.Height}
            onChange={this.handleChange.bind(this,'Height')}
            margin="normal"
            />

            <br/>
            <TextField
            label="Weight"
            className={classes.textField}
            value={this.state.Weight}
            onChange={this.handleChange.bind(this,'Weight')}
            margin="normal"
            />
            <br/>
            <TextField
            label="Gender"
            className={classes.textField}
            value={this.state.Gender}
            onChange={this.handleChange.bind(this,'Gender')}
            margin="normal"
            />
            <br/>
            <TextField
            label="Catch Ratio"
            className={classes.textField}
            value={this.state.CatchR}
            onChange={this.handleChange.bind(this,'CatchR')}
            margin="normal"
            />
            <br/>

            <Button variant="contained" color="primary" className={classes.button}>Add Pokemon</Button>
          </form>
        </Paper>
      </div>
    );
  }
}


export default withStyles(styles)(AddPokemon);