export type UserRol = 'ADMIN' | 'USER';

export interface Usuario {
    email: string;
    password: string;
    rol: UserRol;
}