import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { HeaderComponent } from './components/admin/header/header.component';
import { SidebarComponent } from './components/admin/sidebar/sidebar.component';
import { DetailpageComponent } from './components/client/detailpage/detailpage.component';
import { ClientComponent } from './components/client/client.component';
import { FooterComponent } from './components/client/footer/footer.component';
import { NavbarComponent } from './components/client/navbar/navbar.component';
import { ProducthomeComponent } from './components/client/producthome/producthome.component';
import { HomeheaderComponent } from './components/client/homeheader/homeheader.component';
import { SlideshowComponent } from './components/client/slideshow/slideshow.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HeaderComponent,
    SidebarComponent,
    DetailpageComponent,
    ClientComponent,
    FooterComponent,
    NavbarComponent,
    ProducthomeComponent,
    HomeheaderComponent,
    SlideshowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
