import  {configureStore} from "@reduxjs/toolkit";
import userSlice from "./user/user-action";

const store = configureStore({
    reducer : {
        user : userSlice.reducer
    }
});

export default store;