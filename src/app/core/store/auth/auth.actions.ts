import { createAction, props } from "@ngrx/store";
import { Usuario } from "../../../pages/dashboard/usuarios/models";


export const setAuthUser = createAction(
    '[Auth] set auth user', 
    props <{ payload: Usuario}>());

export const unsetAuthUser = createAction('[Auth] unset aut user' );
