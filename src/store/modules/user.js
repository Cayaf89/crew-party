export default {
    state: () => ({
        isAuthenticated: false,
        email: '',
        name: '',
        email_verified_at: '',
        created_at: '',
        updated_at: '',
    }),
    mutations: {
        setUser(state, user, column) {
            if (column) {
                state[column] = user[column];
            }
            else {
                state.isAuthenticated = user.isAuthenticated;
                state.email = user.email;
                state.name = user.name;
                state.email_verified_at = user.email_verified_at;
                state.created_at = user.created_at;
                state.updated_at = user.updated_at;
            }
        },
        logout(state) {
            state.isAuthenticated = false;
            state.email = '';
            state.name = '';
            state.email_verified_at = '';
            state.created_at = '';
            state.updated_at = '';
        }
    },
    actions: {

    }
}
