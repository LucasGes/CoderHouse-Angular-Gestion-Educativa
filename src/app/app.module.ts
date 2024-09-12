import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule, MAT_DATE_LOCALE } from '@angular/material/core';
import { MAT_DATE_FORMATS, DateAdapter, MAT_NATIVE_DATE_FORMATS } from '@angular/material/core';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from './core/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';



export const MY_DATE_FORMATS = {
  parse: {
    dateInput: 'DD/MM/YYYY',
  },
  display: {
    dateInput: 'DD/MM/YYYY',
    monthYearLabel: 'MMMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};




@NgModule({
  declarations: [
    AppComponent,  
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDatepickerModule,
    MatNativeDateModule,
    StoreModule.forRoot(rootReducer, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  
  ],

  providers: [
    provideAnimationsAsync(),
    { provide: MAT_DATE_LOCALE, useValue: 'es-AR' },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },
    provideHttpClient(withFetch())
  ],

  bootstrap: [AppComponent]
})

export class AppModule { }
