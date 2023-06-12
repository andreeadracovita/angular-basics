import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { BlogComponent } from "./blog/blog.component";
import { RecipesComponent } from "./recipes/recipes.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ContactComponent } from "./contact/contact.component";
import { ErrorComponent } from "./error/error.component";
import { CanDeactivateGuardService } from "./services/canDeactivate-guard.service";

const appRoute: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'recipes', component: RecipesComponent},
    {path: 'recipes/:id', component: ProductDetailComponent},
    {path: 'contact', canDeactivate: [CanDeactivateGuardService] , component: ContactComponent},
    {path: '**', component: ErrorComponent}
  ]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoute)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}