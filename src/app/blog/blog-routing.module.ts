import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogComponent } from './blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { AddComponent } from './add/add.component';

const routes: Routes = [
	{path: '', component: BlogComponent}, 
	{path: 'add', component: AddComponent}, 
	{path: ':id', component: BlogDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
