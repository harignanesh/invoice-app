import { Injectable } from '@angular/core';
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'

@Injectable({
  providedIn: 'root'
})
export class PdfService {
  constructor() {}

  generatePdf(): void {
    const doc = new jsPDF();
    autoTable(doc, { html: '#my-table' })

    // Add title and other headers
    doc.setFontSize(18);
    doc.text('BRILLIANTS ELECTRONICS', 14, 22);
    doc.setFontSize(12);
    doc.text('Making Technology work', 14, 30);
    doc.text('GSTIN: 33ARYPL4958M1ZS', 150, 22);
    doc.text('Invoice No: 201', 150, 30);
    doc.text('Date: 3-Dec-2024', 150, 38);
    
    // Add address and contact details
    doc.text('142/5, Sakthivel Nagar', 14, 38);
    doc.text('Peravallur, Chennai - 600 082.', 14, 46);
    doc.text('Phone: 9840034153', 14, 54);
    doc.text('Email: brilliantelectronics.chennai@gmail.com', 14, 62);
    
    // Add customer details
    doc.text('Bill To:', 14, 78);
    doc.text('FUJITSU GENERAL INDIA PRIVATE', 14, 86);
    doc.text('Prestige Cosmopolitan, No:36', 14, 94);
    doc.text('8th Floor Guindy Chennai-32', 14, 102);
    doc.text('Tamil Nadu 600032, India', 14, 110);
    doc.text('GSTIN: 33AADCF5791RIZY', 14, 118);

    // Add table
    const columns = ["S.No", "Description", "HSN/SAC", "QTY", "Price", "Total"];
    const rows = [
      [1, "POWER PCB", 998719, 4, 400, 1600],
    ];
    //doc.autoTable(columns, rows, { startY: 130 });
    
// Or use javascript directly:
autoTable(doc, {
    head: [['Name', 'Email', 'Country']],
    body: [
      ['David', 'david@example.com', 'Sweden'],
      ['Castille', 'castille@example.com', 'Spain'],
      // ...
    ],
  })
 // autoTable.default(doc, { html: '#my-table' })

 doc.save('table.pdf')
//     // Add totals and other info
//     doc.text('TOTAL: 1600', 150, doc.autoTable.previous.finalY + 10);
//     doc.text('SGST-9%: 144', 150, doc.autoTable.previous.finalY + 18);
//     doc.text('CGST-9%: 144', 150, doc.autoTable.previous.finalY + 26);
//     doc.text('Total Amount: 1888', 150, doc.autoTable.previous.finalY + 34);
//     doc.text('Round Off Amount: 1888', 150, doc.autoTable.previous.finalY + 42);
//     doc.text('Authorized Signatory', 150, doc.autoTable.previous.finalY + 50);

//     // Add footer
//     doc.text('Thank you for your business!', 14, doc.autoTable.previous.finalY + 50);

//     // Save PDF
//     doc.save('Invoice.pdf');
  }
}
