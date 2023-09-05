import { createSlice } from '@reduxjs/toolkit';
import apiClient from '../../utils/apiClient';
import { ThunkApp } from '../../utils/types';
import { encrypt } from '../../utils/cryptoJs';

interface Body {
    user_name: string;
    email: string;
    password: string;
}

interface NewUser {
    createdAt: string;
    email: string;
    id: number;
    role: string;
    status: string;
    updatedAt: string;
    user_name: string;
}

interface UserCreated {
    data: NewUser;
    status: string;
}

export const userSessionSlice = createSlice({
    name: 'userSession',
    initialState: {},
    reducers: {
        userLogin: (_state, action) => {
            const body = action.payload;

            apiClient.post('/users/login', body).then(res => {
                const { token } = res.data.data;
                encrypt('토큰', token);
            })

        },
    },
});

export const createUserThunk = (body: Body) => (dispatch: ThunkApp) => {
    const { user_name, email, password } = body;

    const loginBody = {
        email,
        password,
    };

    apiClient.post<UserCreated>('/users', body)
        .then(() => {

            encrypt('사용자 이름', user_name)

            dispatch(userLogin(loginBody))
        });
};

export const { userLogin } = userSessionSlice.actions;

export default userSessionSlice.reducer;
