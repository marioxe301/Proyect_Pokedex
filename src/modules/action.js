// types of action
const Types = {
    CREATE_ITEM: "CREATE_ITEM",
    DELETE_ITEM: "DELETE_ITEM"
  };
  // actions
  const createItem = (name,image,t,h,w,g,cr) => ({
    type: Types.CREATE_ITEM,
    payload: {name,image,t,h,w,g,cr}
  });
  
  const deleteItem = id => ({
    type: Types.DELETE_ITEM,
    payload: id
  });
  
  export default {
    createItem,
    deleteItem,
    Types
  };