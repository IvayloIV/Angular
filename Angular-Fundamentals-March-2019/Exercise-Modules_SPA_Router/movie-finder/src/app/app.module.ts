import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './componenets/common/footer/footer.component';
import { NavComponent } from './componenets/common/nav/nav.component';
import { MovieModule } from './componenets/movie/movie.module';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MovieModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
