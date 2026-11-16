import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import {HttpClientModule} from '@angular/common/http';
import { OnChangesParentComponent } from './on-changes-parent/on-changes-parent.component';
import { OnChangesChildComponent } from './on-changes-child/on-changes-child.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductDetailComponent,
    OnChangesParentComponent,
    OnChangesChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
