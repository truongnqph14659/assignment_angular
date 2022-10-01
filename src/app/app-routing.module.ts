import { SignupComponent } from './components/client/signup/signup.component';
import { SigninComponent } from './components/client/signin/signin.component';
import { DetailpageComponent } from './components/client/detailpage/detailpage.component';
import { HomepageComponent } from './components/client/homepage/homepage.component';
import { ProducthomeComponent } from './components/client/producthome/producthome.component';
import { AdminComponent } from './components/admin/admin.component';
import { ClientComponent } from './components/client/client.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SearchpageComponent } from './components/client/searchpage/searchpage.component';
import { HomeAdminComponent } from './components/admin/home-admin/home-admin.component';
import { ProductComponent } from './components/admin/product/product.component';
import { ProductListComponent } from './components/admin/product-list/product-list.component';
const routes: Routes = [
  {'path':'',component:ClientComponent,children:[
    {'path':'',component:HomepageComponent},
    {'path':'brandname/:id',component:SearchpageComponent},
    {'path':'detail/:id',component:DetailpageComponent},
    {'path':'signin',component:SigninComponent},
    {'path':'signup',component:SignupComponent}
    // nếu mà phần link selector ko giống theo đường dẫn các cấp như children thì nó vẫn ra linh link gốc cha của nó vidu: detail/1
    // {'path':'detail/:id',component:DetailpageComponent,children:[{
    //   'path':'brandname/:id',component:SearchpageComponent
    // }]}
  ]},
  {'path':'admin',component:AdminComponent, children:[
    {path:"",component:HomeAdminComponent},
    {path:"product",component:ProductComponent, children:[
      {
        path:"", component:ProductListComponent
      }
    ]}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
