import { createFeatureSelector, createSelector } from "@ngrx/store";
import { authPageName, AuthState } from './auth.reducer';


export const selectAuthState = createFeatureSelector<AuthState>(authPageName)

export const selectAuthUser = createSelector(selectAuthState, (state) => state.authUser);

