import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AuthService } from './auth/auth.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { MyHttpInterceptor } from './my-http-interceptor';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { CallbackComponent } from './callback/callback.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [AuthService,
    {
    provide: HTTP_INTERCEPTORS,
    useClass: MyHttpInterceptor,
    multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
