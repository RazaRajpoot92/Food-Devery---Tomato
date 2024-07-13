import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        total:0
    },
    reducers: {
        addItem: (state, action) => {
            const item = state.items.find((item) => item._id === action.payload._id);
            if (!item) {
                let newItem = { ...action.payload, qty: 1 };
                state.items.push(newItem);
            } else {
                item.qty += 1;
            }
            state.total = state.items.reduce((acc, item) => acc + item.price * item.qty, 0);
        },
        removeItem: (state, action) => {
            const itemIndex = state.items.findIndex((item) => item._id === action.payload._id);
            if (itemIndex !== -1) {
                if (state.items[itemIndex].qty === 1) {
                    state.items.splice(itemIndex, 1);
                } else {
                    state.items[itemIndex].qty -= 1;
                }
            }
            state.total = state.items.reduce((acc, item) => acc + item.price * item.qty, 0);
        },

        getTotalAmount:(state)=>{
            
            for(let i=0; i<state.items.length; i++){
                let item = state.items[i]

                if(item.qty>0){
                    state.total += item.price * item.qty
                }
            }
        }
        
    }
});

export const { addItem, removeItem,getTotalAmount } = cartSlice.actions;
export default cartSlice.reducer;
