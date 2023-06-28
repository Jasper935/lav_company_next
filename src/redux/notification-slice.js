import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    message: '',
    isSuccess: true
}


const usersSlice = createSlice({
    name: 'notification',
    initialState,

    reducers: {
        setNotification: (state, {payload:{message, isSuccess}}) => {
            state.message = message
            state.isSuccess=isSuccess
        }
    }
})
export const {setNotification} = usersSlice.actions
export default usersSlice.reducer