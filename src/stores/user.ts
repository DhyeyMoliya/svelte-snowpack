/* 
Exports :
1. Stores : user and token
2. Functions : login({user, token}) and logout()
 */

import { tick } from "svelte";
import { writable } from "svelte/store";
import { router } from 'tinro';

let _user = (localStorage.getItem('_u') && JSON.parse(localStorage.getItem('_u'))) || null;
let _token = localStorage.getItem('_t') || null;

export const user = writable(_user);
export const token = writable(_token);

export const login = async (data: { user: any, token: any }) => {
    if (!data?.user || !data?.token) {
        return;
    } else {
        localStorage.setItem('_u', JSON.stringify(data.user));
        localStorage.setItem('_t', data.token);
        user.set(data.user);
        token.set(data.token);
        await tick();
        router.goto('/');
    }
};

export const logout = async () => {
    localStorage.removeItem('_u');
    localStorage.removeItem('_t');
    user.set(null);
    token.set(null);
    await tick();
    router.goto('/login');

};

user.subscribe(newValue => {
    if (newValue) {
        localStorage.setItem('_u', JSON.stringify(newValue));
    } else {
        localStorage.removeItem('_u');
    }
});

token.subscribe(newValue => {
    if (newValue) {
        localStorage.setItem('_t', newValue);
    } else {
        localStorage.removeItem('_t');
    }
});