import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import GridList from '@material-ui/core/GridList';

import { Avatar, ListItem, List, ListItemAvatar, ListItemText, Button, TextField } from '@material-ui/core';
import ACTIONS from "../modules/action";
import { connect } from "react-redux";
import AddPokemon from './AddPokemon';


const styles = theme => ({
    bigAvatar: {
        margin: 10,
        width: 60,
        height: 60,
    },
    button: {
        margin: theme.spacing.unit,
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 16,
        border: '1px solid',
        lineHeight: 1.5,
        backgroundColor: '#007bff',
        borderColor: '#007bff',
        color: 'white',
        position : 'absolute',
        top: '0%',
        left: '0%'
    },
    gridList: {
        width: 500,
        height: 300,
    },
    textField: {
        marginLeft: theme.spacing.unit,
        marginRight: theme.spacing.unit,
        width: 200,
        paddingBottom: '2%',
    },
    papert:{
        ...theme.mixins.gutters(),
        position: 'absolute',
        top:'23%',
        left: '5%',
        paddingBottom: theme.spacing.unit * 2,
        height: 'auto',
        width: 200,
    }
});

const mapStateToProps = state => ({
    items: state.items
});

const mapDispatchToProps = dispatch => ({
    createItem: item => dispatch(ACTIONS.createItem(item)),
    deleteItem: id => dispatch(ACTIONS.deleteItem(id))
});

let pokemonform = <AddPokemon/>


class PokemonList extends Component{
    constructor(){
        super();
        this.state={
            checkB: false,
            checkP:false,
            Pname:'',
            pokemonfind : [],
        }
    }



    generateList = () =>{
        return this.props.items.map(row =>(
                    <ListItem key={row.id}>
                        <ListItemAvatar>
                            <Avatar src={row.image} className={this.bigAvatar}/>
                        </ListItemAvatar>
                        <ListItemText primary={row.name} secondary={row.Type +'-'+row.CatchR}/>
                    </ListItem>
                ))
    }
    
    addpokemon = () =>{
        if(this.state.checkB === false){
            this.setState({checkB : true})
        }else{
            this.setState({checkB: false})
        }
    }

    handleChange = (Name,event) =>{
        this.setState({ [Name]: event.target.value });
    }

    render(){

        let filterpokemon = this.props.items.filter(
            (pokemon)=>{
                return pokemon.name.toLowerCase().indexOf(this.state.Pname.toLowerCase()) !== -1;
            }
        )
        const {classes} = this.props;
        return(
            <div>
                <div>
                    <Button className={classes.button} color="primary" variant="contained"
                    onClick={this.addpokemon.bind(this)}>Add</Button>
                </div>

                <div>
                    <TextField className={classes.textField} label="Search"
                    value={this.state.Pname} onChange={this.handleChange.bind(this,'Pname')}
                    />
                    
                </div>

                <Paper>
                    <GridList className={classes.gridList}>
                        <List>
                        {filterpokemon.map((row) =>{
                            return <ListItem key={row.id}>
                                        <ListItemAvatar>
                                            <Avatar src={row.image} className={this.bigAvatar}/>
                                        </ListItemAvatar>
                                    <ListItemText primary={row.name} secondary={row.Type +'-'+row.CatchR}/>
                                </ListItem>
                        })}
                        </List>
                    </GridList>
                </Paper>

                <div>
                {this.state.checkB ?
                pokemonform :
                <div></div>}
                </div>
                
                

            </div>
        );
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(PokemonList));