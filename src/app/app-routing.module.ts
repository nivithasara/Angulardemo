import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{path: 'home', loadChildren: () => import('./homepage/homepage.module').then(module => module.HomepageModule)},
	{path: 'blog', loadChildren: () => import('./blog/blog.module').then(module => module.BlogModule)},
	{path: 'error', loadChildren: () => import('./page-not-found/page-not-found.module').then(module=>module.PageNotFoundModule)},
	{path: 'myaccount', loadChildren: () => import('./myaccount/myaccount.module').then(module => module.MyaccountModule)},
	{path: '', redirectTo: 'home', pathMatch:'full'}, 
	{path: '**', redirectTo: 'error', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
