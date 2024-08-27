export type UserRol = 'ADMIN' | 'USER';

export interface Usuario {
    id: string;
    nombre: string;
    apellido: string;
    email: string;
    contrasena: string;
    rol: UserRol;
    token: string;
}