import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componets/template/header/header.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './componets/template/footer/footer.component';
import { BannerComponent } from './componets/template/banner/banner.component';
import { ProductsComponent } from './componets/template/products/products.component';
import { CommentsComponent } from './componets/template/comments/comments.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    BannerComponent,
    ProductsComponent,
    CommentsComponent,
    AboutComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
