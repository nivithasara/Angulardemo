import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MyaccountComponent } from './myaccount.component';

const routes: Routes = [
	{path: 'signup', component:MyaccountComponent},
	{path: '', redirectTo:'signup', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MyaccountRoutingModule { }
