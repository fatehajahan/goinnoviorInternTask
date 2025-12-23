import { createSlice } from '@reduxjs/toolkit'

// get user from localStorage if exists
const userFromStorage = JSON.parse(localStorage.getItem('user'))

const initialState = {
    user: userFromStorage || null,
    isLoggedIn: !!userFromStorage,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        login: (state, action) => {
            state.user = action.payload
            state.isLoggedIn = true

            // save user to localStorage
            localStorage.setItem('user', JSON.stringify(action.payload))
        },

        logout: (state) => {
            state.user = null
            state.isLoggedIn = false

            // remove user from localStorage
            localStorage.removeItem('user')
        },
    },
})

export const { login, logout } = userSlice.actions
export default userSlice.reducer
