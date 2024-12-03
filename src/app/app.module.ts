import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BillingInfoComponent } from './billing-info/billing-info.component';
import { ItemListComponent } from './item-list/item-list.component';
import { TotalCalcComponent } from './total-calc/total-calc.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BillingInfoComponent,
    ItemListComponent,
    TotalCalcComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
