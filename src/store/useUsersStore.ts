import {create} from "zustand"
import {persist} from "zustand/middleware";
import {UserState} from "../models/store_models/store.dt";




export const useUserStore = create<UserState>()(
    persist((set) => ({
        users: [],

        addUser: (userData) =>
            set((state) => ({
                users: [
                    ...state.users,
                    {
                        id: crypto.randomUUID(),
                        ...userData,
                    }
                ]
            })),

        updateUser: (id, data) =>
            set((state) => ({
                users: state.users.map((user) =>
                    user.id === id ? { ...user, ...data } : user
                )
            })),

        deleteUser: (id) =>
            set((state) => ({
                users: state.users.filter((user) => user.id !== id)
            })),
    }), {name: "users-store"})
)