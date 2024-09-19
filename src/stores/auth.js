import { defineStore } from 'pinia';

import { axiosWrapper } from '@/plugin/axiosWrapper';
import  Router  from '@/router/index';
import { useAlertStore } from '@/stores/alert';

const baseUrl = process.env.VUE_APP_BASE_URL;

export const useAuthStore = defineStore({
    id: 'auth',
    state: () => ({
        // initialize state from local storage to enable user to stay logged in
        user: JSON.parse(localStorage.getItem('user')),
        returnUrl: '/user/chemical'
    }),
    actions: {
        async login(username, password) {
            try {
                const user = await axiosWrapper.post(baseUrl+'api/auth/login', { username, password });    

                // update pinia state
                this.user = user;

                // store user details and jwt in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));

                // redirect to previous url or default to home page
                Router.push(this.returnUrl || '/');
            } catch (error) {
                const alertStore = useAlertStore();
                alertStore.error(error);
            }
        },
        logout() {
            this.user = null;
            localStorage.removeItem('user');
            Router.push('/auth/login');
        }
    }
});
