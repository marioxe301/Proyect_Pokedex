import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

import { Avatar, ListItem, List, ListItemAvatar, ListItemText } from '@material-ui/core';


const styles = theme => ({
    bigAvatar: {
        margin: 10,
        width: 60,
        height: 60,
    },
});

class PokemonList extends Component{
    constructor(props){
        super(props);
        this.state={
            pokemon: [
                {name:'Pikachu',image:'https://icon2.kisspng.com/20171220/zge/pikachu-png-5a3a8cb04eba97.2589182415137865443225.jpg',Type:'Electric',Height: 12,Weight: 23,Gender:'M',CatchR: '34%'},
                {name:'Pichu',image:'https://banner2.kisspng.com/20180602/uxs/kisspng-pikachu-pichu-pokmon-ranger-pokmon-go-monsters-5b1245d16bccb2.4875086515279241774416.jpg',Type:'Electric',Height: 12, Weight: 23,Gender:'F',CatchR: '34%'},
                {name:'Raichu',image:'https://banner2.kisspng.com/20180524/urj/kisspng-pikachu-pokmon-x-and-y-raichu-dragonair-5b076a84147ca9.2268035715272126760839.jpg',Type:'Electric',Height: 9, Weight: 12,Gender:'M',CatchR: '25%'},
                {name:'Bulbasaur',image:'https://banner2.kisspng.com/20190220/jvp/kisspng-bulbasaur-portable-network-graphics-image-ivysaur-5c6de5a8d995a8.8243952615507060888912.jpg',Type:'Leaf',Height: 8, Weight: 2,Gender:'F',CatchR: '21%'},
                {name:'Charmander',image:'https://icon2.kisspng.com/20180612/gyq/kisspng-pikachu-pokmon-x-and-y-charmander-charizard-charmander-5b20033fef11f6.0297187615288246399792.jpg',Type:'Fire',Height: 7, Weight: 4,Gender:'M',CatchR: '50%'}
            ]
        }
    }

    generateList = () =>{
        return this.state.pokemon.map((row,index) =>(
                    <ListItem key={index}>
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


export default withStyles(styles)(PokemonList);