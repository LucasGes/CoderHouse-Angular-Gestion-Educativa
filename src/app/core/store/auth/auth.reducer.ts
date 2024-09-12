import { createReducer, on } from "@ngrx/store";
import { Usuario } from "../../../pages/dashboard/usuarios/models";
import { setAuthUser, unsetAuthUser } from "./auth.actions";

export const authPageName = 'auth';

export interface AuthState {

    authUser: Usuario | null;
}

const initialState: AuthState = { authUser: null }

export const authReducer = createReducer(
    initialState,
    on(setAuthUser, (state, action) => {

        return {

            ...state,
            authUser: action.payload

        }
    }),

    on(unsetAuthUser, () => initialState),
);