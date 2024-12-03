import { Injectable } from '@angular/core';
import { Invoice } from './Model/Invoice.model';

@Injectable({
  providedIn: 'root'
})
export class InvoiceService {
  private invoice: Invoice = {
    companyName: 'BRILLIANTS ELECTRONICS',
    companyAddress: '142/5, Sakthivel Nagar, Peravallur, Chennai - 600 082',
    companyPhone: '9840034153',
    companyEmail: 'brilliantelectronics.chennai@gmail.com',
    gstin: '33ARYPL4958M1ZS',
    invoiceNumber: '201',
    date: '3-Dec-2024',
    billingName: 'FUJITSU GENERAL INDIA PRIVATE',
    billingAddress: 'Prestige Cosmopolitan, No:36 8th Floor Guindy Chennai-32, Tamil Nadu 600032, India',
    billingGstin: '33AADCF5791RIZY',
    items: [
      { description: 'POWER PCB', hsn: '998719', qty: 4, price: 400.00, total: 1600.00 }
    ],
    subtotal: 1600.00,
    sgst: 144.00,
    cgst: 144.00,
    total: 1888.00
  };

  getInvoice(): Invoice {
    return this.invoice;
  }
}
