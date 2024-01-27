import { createSlice } from "@reduxjs/toolkit";

const FormSlice = createSlice({
    name: "formli",
    initialState: [],
    reducers: {
        addformdata: (state, action) => {
            const newItem = action.payload;

            state.push(newItem);


        },
        deleteFromformtList: (state, action) => {
            const itemIdToRemove = action.payload;
            return state.filter(item => item.vrno !== itemIdToRemove);
        },
        updateFormData: (state, action) => {
            const updatedItem = action.payload;
            const index = state.findIndex(item => item.vrno === updatedItem.vrno);

            if (index !== -1) {
                state[index] = updatedItem;
            }
        },




        // removeFromWishlist: (state, action) => {
        //     const itemIdToRemove = action.payload;
        //     return state.filter(item => item.id !== itemIdToRemove);
        //   }

    }
})
export const { addformdata, deleteFromformtList, takedatabyid ,updateFormData} = FormSlice.actions;
export default FormSlice.reducer;