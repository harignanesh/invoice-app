import { Component, Input } from '@angular/core';
import { Invoice } from '../Model/Invoice.model';

@Component({
  selector: 'app-total-calc',
  templateUrl: './total-calc.component.html',
  styleUrls: ['./total-calc.component.scss']
})
export class TotalCalcComponent {
  @Input()
  invoice!: Invoice; 
}
