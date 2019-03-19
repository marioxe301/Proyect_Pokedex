import ACTIONS from "./action";
import _ from "lodash";

const defaultState = {
  items: [
    {id: 0, name:'Pikachu',image:'https://icon2.kisspng.com/20171220/zge/pikachu-png-5a3a8cb04eba97.2589182415137865443225.jpg',Type:'Electric',Height: 12,Weight: 23,Gender:'M',CatchR: '34%'},
    {id: 1, name:'Pichu',image:'https://banner2.kisspng.com/20180602/uxs/kisspng-pikachu-pichu-pokmon-ranger-pokmon-go-monsters-5b1245d16bccb2.4875086515279241774416.jpg',Type:'Electric',Height: 12, Weight: 23,Gender:'F',CatchR: '34%'},
    {id: 2, name:'Raichu',image:'https://banner2.kisspng.com/20180524/urj/kisspng-pikachu-pokmon-x-and-y-raichu-dragonair-5b076a84147ca9.2268035715272126760839.jpg',Type:'Electric',Height: 9, Weight: 12,Gender:'M',CatchR: '25%'},
    {id: 3, name:'Bulbasaur',image:'https://banner2.kisspng.com/20190220/jvp/kisspng-bulbasaur-portable-network-graphics-image-ivysaur-5c6de5a8d995a8.8243952615507060888912.jpg',Type:'Leaf',Height: 8, Weight: 2,Gender:'F',CatchR: '21%'},
    {id: 4, name:'Charmander',image:'https://icon2.kisspng.com/20180612/gyq/kisspng-pikachu-pokmon-x-and-y-charmander-charizard-charmander-5b20033fef11f6.0297187615288246399792.jpg',Type:'Fire',Height: 7, Weight: 4,Gender:'M',CatchR: '50%'}
  ]
};

const todoReducer = (state = defaultState, action) => {
  switch (action.type) {
    case ACTIONS.Types.CREATE_ITEM: {
      console.log(action);

      let item = action.payload;
      let newItem = { id: state.items.length + 1, name: item, image: item, Type: item, Height: item , Weight: item, Gender: item, CatchR: item  };
      let newState = _.cloneDeep(state);
      newState.items.push(newItem);
      return newState;
    }

    case ACTIONS.Types.DELETE_ITEM: {
      let newState = _.cloneDeep(state);
      console.log(action.payload);
      let index = _.findIndex(newState.items, { id: action.payload });
      newState.items.splice(index, 1);
      return newState;
    }

    default:
      return state;
  }
};

export default todoReducer;