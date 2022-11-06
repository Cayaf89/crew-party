import { createStore } from 'vuex'
import user from "@/store/modules/user";

// Create a new store instance.
export default createStore({
    modules: {
        user: user,
    }
})
