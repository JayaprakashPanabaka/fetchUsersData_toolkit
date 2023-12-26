import { createSlice, createAsyncThunk, configureStore } from "@reduxjs/toolkit";

let initialData = {
    loading: false,
    users: [],
    error: '',
}

export let fetchUsersData = createAsyncThunk('usersFetch', async() => {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/users')
        let data = await response.json()
        // console.log(data);
        return data
    } catch(error) {
        throw error
    }
})

// console.log(usersFetchData);

const usersSlice = createSlice({
    name: 'UsersData',
    initialState: initialData,
    reducers: {
        extraReducers: (builder) => {
            builder.addCase(fetchUsersData.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchUsersData.fulfilled, (state, action) => {
                state.loading = false
                state.users = action.payload
                state.error = ''
            })
            .addCase(fetchUsersData.rejected, (state, action) => {
                state.loading = false
                state.users = []
                state.error = action.error.message
            })
        }
    }
})


const usersStore = configureStore({
    reducer: {
        UsersData: usersSlice.reducer
    }
})

export default usersStore











