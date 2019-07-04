import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlogRoutingModule } from './blog-routing.module';
import { BlogComponent } from './blog.component';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { AddComponent } from './add/add.component';

@NgModule({
  declarations: [BlogComponent, BlogDetailComponent, BlogListComponent, AddComponent],
  imports: [
    CommonModule,
    BlogRoutingModule
  ],
  providers: []
})
export class BlogModule { }
