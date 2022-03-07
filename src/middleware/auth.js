import { useAuthStore } from "../stores/auth";

export function isAuthenticated(to, from) {
    let authStore = useAuthStore();
    return authStore.isAuthenticated;
}
