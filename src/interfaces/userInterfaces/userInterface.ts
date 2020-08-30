// User interface for creating and updating 
export interface RegisterUserInterface {
    id?: number,
    username: string,
    email: string,
    password: string
}

export interface LoginUserInterface {
    id?: number,
    email: string,
    password: string
}

export interface UpdateUserInterface {
    id?: number,
    username?: string,
    email?: string,
    password?: string
}