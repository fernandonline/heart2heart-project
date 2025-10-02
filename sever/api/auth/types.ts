export interface UserModel {
    name: string;
    email: string;
    password: string;
    createdAt: Date;
}

export interface UserDTO {
    name: string;
    email: string;
    loggedAt: Date;
}