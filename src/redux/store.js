import { configureStore } from "@reduxjs/toolkit";
import formslice from "./slices/formslice";

const store=configureStore({
    reducer:{

        formlistReducer:formslice,



    }
})
export default store