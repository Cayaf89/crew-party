export default {
    state: () => ({
        isAuthenticated: false,
        profile_picture: 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y',
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
                state.profile_picture = user.profile_picture;
                state.email = user.email;
                state.name = user.name;
                state.email_verified_at = user.email_verified_at;
                state.created_at = user.created_at;
                state.updated_at = user.updated_at;
            }
        },
        setUserValue(state, payload) {
            state[payload.columnName] = payload.columnValue;
        },
        logout(state) {
            state.isAuthenticated = false;
            state.profile_picture = 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y';
            state.email = '';
            state.name = '';
            state.email_verified_at = '';
            state.created_at = '';
            state.updated_at = '';
            localStorage.removeItem('access_token');
        }
    },
    actions: {}
}
