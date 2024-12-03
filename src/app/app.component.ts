import { Component, Input, OnInit } from '@angular/core';
import { InvoiceService } from './invoice.service';
import { Invoice } from './Model/Invoice.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @Input()
  invoice!: Invoice; 

  constructor(private invoiceService: InvoiceService) {}

  ngOnInit() {
    this.invoice = this.invoiceService.getInvoice();
  }
}
