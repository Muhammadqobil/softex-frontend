export type appSelectorStoreType = {}

export interface UserStoreType {
    id: string;
    first_name: string,
    last_name: string,
    birth_date: Date,
    gender: 'male' | 'female',
}

export interface UserState {
    users: UserStoreType[];
    addUser: (user: Omit<UserStoreType, "id">) => void;
    updateUser: (id: string, data: Partial<UserStoreType>) => void;
    deleteUser: (id: string) => void;
}