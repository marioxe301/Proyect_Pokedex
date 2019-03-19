import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import { Redirect } from 'react-router'

const styles = theme => ({
    root: {
      ...theme.mixins.gutters(),
      
      paddingBottom: theme.spacing.unit * 2,
      height: 'auto',
      width: 300,
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
    mess:{
      color: 'black',
    }
});


let msj = <h5>Incorrect Username or Password</h5>;
let pasf = <Redirect to='/PL'/>

class LoginCmp extends Component{
  constructor(props){
    super(props);
    this.state ={
      user: '',
      password : '',
      check: false,
      checkF: false,
    }
  }
  
  handleChange = (Name,event) =>{
    this.setState({[Name]: event.target.value});
  };

  CheckAccount = () =>{
    if((this.state.user === 'Ash Ketchum'|| this.state.user === 'ash@pokemon.com​') && (this.state.password === 'pokedex')){
      this.setState({checkF: true})
    }else if((this.state.user === 'Misty'|| this.state.user === 'misty@pokemon.com​') && (this.state.password === 'paleta')){
      this.setState({checkF: true})
    }else{
      this.setState({check: true})
    }
  }
  

    render(){
        const {classes} = this.props;
        return(
        <form>
            <div>
              {this.state.checkF ?
                pasf :
                <div></div>
              }
            </div>
            <Paper className={classes.root} elevation={10}>
            <div>
                <TextField
                  id="Username or Email"
                  label="Username"
                  className={classes.textField}
                  onChange={this.handleChange.bind(this,'user')}
                  margin="normal"
                  />

                <br/>

                <TextField
                  id="Password"
                  label="Password"
                  className={classes.textField}
                  onChange={this.handleChange.bind(this,'password')}
                  margin="normal"
                  type = "password"
                  />
                
                <br/>
                <br/>
                <Button className={classes.button} color="primary" variant="contained" 
                onClick={this.CheckAccount.bind(this)}>
                Log in
                </Button>
                
                <div className={classes.mess}>
                  {this.state.check ? 
                    msj :
                    <p></p>
                  }
                </div>

              </div>
            </Paper>
        </form>
        );
    }
}

export default withStyles(styles)(LoginCmp);