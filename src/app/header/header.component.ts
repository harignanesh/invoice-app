import { Component, Input } from '@angular/core';
import { Invoice } from '../Model/Invoice.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input()
  invoice!: Invoice; 
}
