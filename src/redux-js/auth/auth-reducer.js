import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import authActions from './auth-actions';

const {
    registerSuccess,
    registerError,
    loginSuccess,
    loginError,
    logoutSuccess,
    logoutError,
    getCurrentUserSuccess,
    getCurrentUserError,
} = authActions;

const initialUserState = { name: null, email: null };

const user = createReducer(initialUserState, {
    [registerSuccess]: (_, { payload }) => payload.user,
    [loginSuccess]: (_, { payload }) => payload.user,
    [logoutSuccess]: () => initialUserState,
    [getCurrentUserSuccess]: (_, { payload }) => payload,
});

const token = createReducer(null, {
    [registerSuccess]: (_, { payload }) => payload.token,
    [loginSuccess]: (_, { payload }) => payload.token,
    [logoutSuccess]: () => null,
});

const serError = (_, { payload }) => payload;

const error = createReducer(null, {
    [registerError]: serError,
    [loginError]: serError,
    [logoutError]: serError,
    [getCurrentUserError]: serError,
});

const isLoggedIn = createReducer(false, {
    [registerSuccess]: () => true,
    [loginSuccess]: () => true,
    [getCurrentUserSuccess]: () => true,
    [registerError]: () => false,
    [loginError]: () => false,
    [getCurrentUserError]: () => false,
    [logoutSuccess]: () => false,
});

export default combineReducers({ user, isLoggedIn, token, error });