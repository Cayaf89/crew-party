import { defineStore } from 'pinia'

export const useUserStore = defineStore({
    id: 'user',
    state: () => ({
        firstname: '',
        lastname: '',
        username: '',
        email: '',
    }),
    getters: {
        fullname: (state) => state.firstname + ' ' + state.lastname
    },
    actions: {
        setUser(user) {
            this.firstname = user.firstname;
            this.lastname = user.lastname;
            this.username = user.username;
            this.email = user.email;
            localStorage.setItem('user', JSON.stringify(user));
        }
    }
})
