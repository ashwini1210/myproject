import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { TestComponent } from './test/test.component';
import { InterComCommComponent } from './inter-com-comm/inter-com-comm.component';
import { HiiComponent } from './inter-com-comm/hii.component';
import { HelloComponent } from './inter-com-comm/hello.component';
import { AtrrBindingComponent } from './atrr-binding/atrr-binding.component';
import { DirectiveDirective } from './directive.directive';
import { StructuralComponent } from './structural/structural.component';
import { ShoppingComponent } from './shopping/shopping.component';
import { ShopinComponent } from './shopping/shopin.component';
import { ShopoutComponent } from './shopping/shopout.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    InterComCommComponent,
    HiiComponent,
    HelloComponent,
    AtrrBindingComponent,
    DirectiveDirective,
    StructuralComponent,
    ShoppingComponent,
    ShopinComponent,
    ShopoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
