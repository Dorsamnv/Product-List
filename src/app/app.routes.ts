import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { CategoryFeaturesComponent } from './category-features/category-features.component';
import { CategoryColorsComponent } from './category-colors/category-colors.component';
import { features } from 'process';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CustomerInfoComponent } from './customer-info/customer-info.component';

export const routes: Routes = [
    {path:'', component: HomeComponent},
    {path:'products', component: ProductListComponent},
    {path:'products/info', component: ProductInfoComponent},
    {path:'categories', component: CategoryListComponent,
        children:[
            {path:'features',component:CategoryFeaturesComponent},
            {path:'colors',component:CategoryColorsComponent},
            {path:'',redirectTo:'features', pathMatch:'full'}
        ]
    },
    {path:'products/:id', component:ProductInfoComponent},
    {path:'customer/info', component:CustomerInfoComponent},
    {path:'**', component:PageNotFoundComponent}
];
