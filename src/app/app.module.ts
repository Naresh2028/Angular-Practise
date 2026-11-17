import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import {HttpClientModule} from '@angular/common/http';
import { OnChangesParentComponent } from './components/on-changes-parent/on-changes-parent.component';
import { OnChangesChildComponent } from './components/on-changes-child/on-changes-child.component';
import { ConcatMapComponent } from './components/concatMap/concatMap.component';
import { ExhaustMapComponent } from './components/exhaust-map/exhaust-map.component';
import { FormComponent } from './components/form/form.component';
import { FormsModule } from '@angular/forms';
import { NoSpacesDirective } from './core/directives/no-spaces.directive';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent,
    OnChangesParentComponent,
    OnChangesChildComponent,
    ConcatMapComponent,
    ExhaustMapComponent,
    FormComponent,
    NoSpacesDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
