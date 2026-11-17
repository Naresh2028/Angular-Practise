import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnChangesChildComponent } from './components/on-changes-child/on-changes-child.component';
import { FormComponent } from './components/form/form.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

const routes: Routes = [
  {path:'', component:ProductDetailComponent},
  {path:'onchange-child',component:OnChangesChildComponent},
  {path:'form',component:FormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
