import { CategoryAddComponent } from './components/admin/category-add/category-add.component';
import { ProductEditComponent } from './components/admin/product-edit/product-edit.component';
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
import { ProductAddComponent } from './components/admin/product-add/product-add.component'
import { CategoryListComponent } from './components/admin/category-list/category-list.component';
import { CategoryComponent } from './components/admin/category/category.component';
import { AuthGuard } from './auth.guard';
const routes: Routes = [
  {'path':'',component:ClientComponent,children:[
    {'path':'',component:HomepageComponent},
    {'path':':brandname/:id',component:SearchpageComponent},
    {'path':'product/:id/detail',component:DetailpageComponent},
    {'path':'signin',component:SigninComponent},
    {'path':'signup',component:SignupComponent}
    // nếu mà phần link selector ko giống theo đường dẫn các cấp như children thì nó vẫn ra linh link gốc cha của nó vidu: detail/1
    // {'path':'detail/:id',component:DetailpageComponent,children:[{
    //   'path':'brandname/:id',component:SearchpageComponent
    // }]}
  ]},
  {'path':'admin',component:AdminComponent,canActivate:[AuthGuard], children:[
    {path:"",component:HomeAdminComponent},
    {path:"home/product",component:ProductComponent, children:[
      {
        path:"", component:ProductListComponent
      },
      {
        path:"add", component:ProductAddComponent
      },
      {
        path:"edit/:id", component:ProductEditComponent
      }
    ]},
    {path:"home/category",component:CategoryComponent, children:[
      {
        path:"", component:CategoryListComponent
      },
      {
        path:"categoryAdd", component: CategoryAddComponent
      }
    ]},
  ]}
];
// haha

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
