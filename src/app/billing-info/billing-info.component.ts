import { Component, Input } from '@angular/core';
import { Invoice } from '../Model/Invoice.model';

@Component({
  selector: 'app-billing-info',
  templateUrl: './billing-info.component.html',
  styleUrls: ['./billing-info.component.scss']
})
export class BillingInfoComponent {
   @Input()
  invoice!: Invoice; 
}
