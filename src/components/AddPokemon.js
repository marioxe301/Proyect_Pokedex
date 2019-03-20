import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import { FormControl } from '@material-ui/core';
import ACTIONS from "../modules/action";
import { connect } from "react-redux";


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
    },
    formControl: {
      margin: theme.spacing.unit,
      minWidth: 120,
    },
});

const mapStateToProps = state => ({
  items: state.items
});

const mapDispatchToProps = dispatch => ({
  createItem: (n,i,t,h,w,g,cr) => dispatch(ACTIONS.createItem(n,i,t,h,w,g,cr)),
  deleteItem: id => dispatch(ACTIONS.deleteItem(id))
});


class AddPokemon extends Component{
  constructor(props){
    super(props);
    this.state = {
      name:'',
      image:'',
      Type1:'',
      Type2:'',
      Height: 0,
      Weight:0,
      Gender:'',
      CatchR: '',
    }
  }
  
  /*createItemPokemon= (name,image,t,h,w,g,cr) => {
    return {name,image,t,h,w,g,cr};
  }*/
  handleChange = (Name,event) =>{
    this.setState({ [Name]: event.target.value });
  }

  submitPokemon = () =>{
     /*let v = this.createItemPokemon.bind(this,this.state.name,this.state.image,this.state.Type1+'-'+this.state.Type2,this.state.Height,this.state.Weight,this.state.Gender,this.state.CatchR)

    this.setState({Object: v })
    console.log(this.state.Object);*/
    console.log(this.state);
    this.props.createItem(this.state.name,this.state.image,this.state.Type1+'-'+this.state.Type2,this.state.Height,this.state.Weight,this.state.Gender,this.state.CatchR);
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
            <FormControl className={classes.formControl}>
              <InputLabel>Type 1</InputLabel>
              <Select
              value={this.state.Type1}
              onChange={this.handleChange.bind(this,'Type1')}
              >
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              <MenuItem value={'Normal'}>Normal</MenuItem>
              <MenuItem value={'Fighting'}>Fighting</MenuItem>
              <MenuItem value={'Flying'}>Flying</MenuItem>
              <MenuItem value={'Poison'}>Poison</MenuItem>
              <MenuItem value={'Ground'}>Ground</MenuItem>
              <MenuItem value={'Rock'}>Rock</MenuItem>
              <MenuItem value={'Bug'}>Bug</MenuItem>
              <MenuItem value={'Ghost'}>Ghost</MenuItem>
              <MenuItem value={'Steel'}>Steel</MenuItem>
              <MenuItem value={'Fire'}>Fire</MenuItem>
              <MenuItem value={'Water'}>Water</MenuItem>
              <MenuItem value={'Grass'}>Grass</MenuItem>
              <MenuItem value={'Electric'}>Electric</MenuItem>
              <MenuItem value={'Psychic'}>Psychic</MenuItem>
              <MenuItem value={'Ice'}>Ice</MenuItem>
              <MenuItem value={'Dragon'}>Dragon</MenuItem>
              <MenuItem value={'Fairy'}>Fairy</MenuItem>
              <MenuItem value={'Dark'}>Dark</MenuItem>
              </Select>
            </FormControl>

            <FormControl className={classes.formControl}>
              <InputLabel>Type 2</InputLabel>
              <Select
              value={this.state.Type2}
              onChange={this.handleChange.bind(this,'Type2')}
              >
              <MenuItem value=''>
                <em>None</em>
              </MenuItem>
              <MenuItem value={'Normal'}>Normal</MenuItem>
              <MenuItem value={'Fighting'}>Fighting</MenuItem>
              <MenuItem value={'Flying'}>Flying</MenuItem>
              <MenuItem value={'Poison'}>Poison</MenuItem>
              <MenuItem value={'Ground'}>Ground</MenuItem>
              <MenuItem value={'Rock'}>Rock</MenuItem>
              <MenuItem value={'Bug'}>Bug</MenuItem>
              <MenuItem value={'Ghost'}>Ghost</MenuItem>
              <MenuItem value={'Steel'}>Steel</MenuItem>
              <MenuItem value={'Fire'}>Fire</MenuItem>
              <MenuItem value={'Water'}>Water</MenuItem>
              <MenuItem value={'Grass'}>Grass</MenuItem>
              <MenuItem value={'Electric'}>Electric</MenuItem>
              <MenuItem value={'Psychic'}>Psychic</MenuItem>
              <MenuItem value={'Ice'}>Ice</MenuItem>
              <MenuItem value={'Dragon'}>Dragon</MenuItem>
              <MenuItem value={'Fairy'}>Fairy</MenuItem>
              <MenuItem value={'Dark'}>Dark</MenuItem>
              </Select>
            </FormControl>
            {/*<TextField
            label="Type"
            className={classes.textField}
            value={this.state.Type}
            onChange={this.handleChange.bind(this,'Type')}
            margin="normal"
            />*/}
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
            <FormControl className={classes.formControl}>
            <InputLabel>Gender</InputLabel>
            <Select
             value={this.state.Gender}
             onChange={this.handleChange.bind(this,'Gender')} 
            >
            <MenuItem value={'M'}>Male</MenuItem>
            <MenuItem value={'F'}>Female</MenuItem>
            </Select>
            </FormControl>
            {/*<TextField
            label="Gender"
            className={classes.textField}
            value={this.state.Gender}
            onChange={this.handleChange.bind(this,'Gender')}
            margin="normal"
            />*/}
            <br/>
            <TextField
            label="Catch Ratio"
            className={classes.textField}
            value={this.state.CatchR}
            onChange={this.handleChange.bind(this,'CatchR')}
            margin="normal"
            />
            <br/>

            <Button variant="contained" color="primary" className={classes.button} onClick={this.submitPokemon.bind(this)}>Add Pokemon</Button>
          </form>
        </Paper>
      </div>
    );
  }
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(AddPokemon));