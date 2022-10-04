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
import { HomepageComponent } from './components/client/homepage/homepage.component';
import { SearchpageComponent } from './components/client/searchpage/searchpage.component';
import { SubnavComponent } from './components/client/subnav/subnav.component';
import { SigninComponent } from './components/client/signin/signin.component';
import { SignupComponent } from './components/client/signup/signup.component';
import { HomeAdminComponent } from './components/admin/home-admin/home-admin.component';
import { ProductComponent } from './components/admin/product/product.component';
import { ProductListComponent } from './components/admin/product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductAddComponent } from './components/admin/product-add/product-add.component'
import { ProductEditComponent } from './components/admin/product-edit/product-edit.component';
import { CategoryListComponent } from './components/admin/category-list/category-list.component';
import { CategoryComponent } from './components/admin/category/category.component';

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
    SlideshowComponent,
    HomepageComponent,
    SearchpageComponent,
    SubnavComponent,
    SigninComponent,
    SignupComponent,
    HomeAdminComponent,
    ProductComponent,
    ProductListComponent,
    ProductAddComponent,
    ProductEditComponent,
    CategoryListComponent,
    CategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule, 
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
