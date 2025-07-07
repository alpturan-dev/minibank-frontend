import { create } from "zustand";

export const useUserStore = create()(() => ({
    user: (() => {
        const storedUser = localStorage.getItem("user");
        const parsedUser = storedUser ? JSON.parse(storedUser) : {};
        return {
            id: parsedUser.id || "",
            email: parsedUser.email || "",
            username: parsedUser.username || "",
            token: parsedUser.token || ""
        };
    })(),
    setUser: (user) => (() => {
        localStorage.setItem("user", JSON.stringify(user))
        return user
    })(),
    clearUser: () => (() => {
        localStorage.clear();
        return null
    })()
}));