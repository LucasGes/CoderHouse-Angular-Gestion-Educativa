import { ActionReducerMap } from "@ngrx/store";
import { authPageName, authReducer, AuthState } from "./auth/auth.reducer";

export interface RootState{
    [authPageName] : AuthState;
};

export const rootReducer: ActionReducerMap<RootState> = {
    [authPageName] :authReducer
};
