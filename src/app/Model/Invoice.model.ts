export interface Item {
    description: string;
    hsn: string;
    qty: number;
    price: number;
    total: number;
  }
  
  export interface Invoice {
    companyName: string;
    companyAddress: string;
    companyPhone: string;
    companyEmail: string;
    gstin: string;
    invoiceNumber: string;
    date: string;
    billingName: string;
    billingAddress: string;
    billingGstin: string;
    items: Item[];
    subtotal: number;
    sgst: number;
    cgst: number;
    total: number;
  }
  