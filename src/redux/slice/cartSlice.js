const initialState = {
    cart: []
  };
  
  // Action types
  const ADD_TO_CART = 'ADD_TO_CART';
  const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
  const DECREMENT_QUANTITY = 'DECREMENT_QUANTITY';
  const CLEAR_CART = 'CLEAR_CART';

  
  // Reducer
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_TO_CART:
        const { phone_id, quantity, ...additionalData } = action.payload;
        const existingProductIndex = state.cart.findIndex(product => product.phone_id === phone_id);
        
        if (existingProductIndex !== -1) {
          const updatedCart = state.cart.map((product, index) => 
            index === existingProductIndex ? { ...product, quantity: product.quantity + quantity, ...additionalData } : product
          );
          return { ...state, cart: updatedCart };
        } else {
          return {
            ...state,
            cart: [
              ...state.cart,
              {
                phone_id,
                quantity,
                ...additionalData
              }
            ]
          };
        }
      case REMOVE_FROM_CART:
        const newCart = state.cart.filter(product => product.phone_id !== action.payload.phone_id);
        return { ...state, cart: newCart };
        
      case DECREMENT_QUANTITY:
        const productIndex = state.cart.findIndex(product => product.phone_id === action.payload.phone_id);
        
        if (productIndex !== -1) {
          const updatedCart = state.cart.map((product, index) => {
            if (index === productIndex) {
              const newQuantity = product.quantity - action.payload.quantity;
              return newQuantity > 0 ? { ...product, quantity: newQuantity } : null;
            }
            return product;
          }).filter(product => product !== null);
          
          return { ...state, cart: updatedCart };
        }
        return state;
        case CLEAR_CART: // Xử lý hành động xóa toàn bộ giỏ hàng
      return { ...state, cart: [] };
      default:
        return state;
    }
  };
  
  // Action creators
  const addToCart = (phone_id, quantity, additionalData = {}) => ({
    type: ADD_TO_CART,
    payload: { phone_id, quantity, ...additionalData }
  });
  
  const removeFromCart = phone_id => ({
    type: REMOVE_FROM_CART,
    payload: { phone_id }
  });
  
  const decrementQuantity = (phone_id, quantity) => ({
    type: DECREMENT_QUANTITY,
    payload: { phone_id, quantity }
  });
  
  const clearCart = () => ({
    type: CLEAR_CART
  });
  export { addToCart, removeFromCart, decrementQuantity, cartReducer,clearCart };
  