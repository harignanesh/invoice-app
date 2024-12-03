import { Component, Input, OnInit } from '@angular/core';
import { InvoiceService } from './invoice.service';
import { Invoice } from './Model/Invoice.model';
import { ExcelService } from './Service/Excel.servicec';
import { PdfService } from './Service/PDF.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @Input()
  invoice!: Invoice; 

  constructor(private invoiceService: InvoiceService,private excelService: ExcelService,private pdfService: PdfService) {}
  
  generateExcelFile(): void { this.excelService.generateExcel('Invoice'); }

  generatePdfFile(): void { this.pdfService.generatePdf();}

  ngOnInit() {
    this.invoice = this.invoiceService.getInvoice();
  }
}
