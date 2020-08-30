// User interface for creating and updating 
export interface RegisterUserInterface {
    id?: string,
    username: string,
    email: string,
    password: string
}

export interface LoginUserInterface {
    id?: string,
    email: string,
    password: string
}

export interface UpdateUserInterface {
    id?: string,
    username?: string,
    email?: string,
    password?: string
}