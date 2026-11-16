import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OnChangesParentComponent } from './on-changes-parent/on-changes-parent.component';
import { OnChangesChildComponent } from './on-changes-child/on-changes-child.component';

const routes: Routes = [
  {path:'', component:OnChangesParentComponent},
  {path:'onchange-child',component:OnChangesChildComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
