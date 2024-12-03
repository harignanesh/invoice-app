import { Component, Input } from '@angular/core';
import { Invoice } from '../Model/Invoice.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.scss']
})
export class ItemListComponent {
  @Input()
  invoice!: Invoice; 
}
