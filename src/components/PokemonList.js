import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import { Avatar, ListItem, List, ListItemAvatar, ListItemText } from '@material-ui/core';
import ACTIONS from "../modules/action";
import { connect } from "react-redux";


const styles = theme => ({
    bigAvatar: {
        margin: 10,
        width: 60,
        height: 60,
    },
});

const mapStateToProps = state => ({
    items: state.items
});

const mapDispatchToProps = dispatch => ({
    createItem: item => dispatch(ACTIONS.createItem(item)),
    deleteItem: id => dispatch(ACTIONS.deleteItem(id))
});


class PokemonList extends Component{
    constructor(){
        super();
        this.state={
            pokemon: ""
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
    
    
    render(){
        return(
            <div>
                <Paper>
                    <List>
                    {this.generateList(this)}
                    </List>
                </Paper>
            </div>
        );
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(PokemonList));