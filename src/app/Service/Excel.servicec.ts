import * as XLSX from 'xlsx';

export class ExcelService {
  constructor() {}

  generateExcel(fileName: string): void {
    const wb = XLSX.utils.book_new();
    const ws_data = [
      ["BRILLIANTS ELECTRONICS", null, null, null, "GSTIN: 33ARYPL4958M1ZS"],
      ["Making Technology work", null, null, null, "Invoice No: 201"],
      ["142/5, Sakthivel Nagar", null, null, null, "Date: 3-Dec-2024"],
      ["Peravallur, Chennai - 600 082.", null, null, null, null],
      ["Phone: 9840034153", null, null, null, null],
      ["Email: brilliantelectronics.chennai@gmail.com", null, null, null, null],
      [],
      ["Bill To:", null, null, null, null],
      ["FUJITSU GENERAL INDIA PRIVATE", null, null, null, null],
      ["Prestige Cosmopolitan, No:36", null, null, null, null],
      ["8th Floor Guindy Chennai-32", null, null, null, null],
      ["Tamil Nadu 600032, India", null, null, null, null],
      ["GSTIN: 33AADCF5791RIZY", null, null, null, null],
      [],
      ["S.No", "Description", "HSN/SAC", "QTY", "Price", "Total"],
      [1, "POWER PCB", 998719, 4, 400, 1600],
      ["", "", "", "", "TOTAL:", 1600],
      ["", "", "", "", "SGST-9%:", 144],
      ["", "", "", "", "CGST-9%:", 144],
      ["", "", "", "", "Total Amount:", 1888],
      ["", "", "", "", "Round Off Amount:", 1888],
      ["", "", "", "", "Authorized Signatory", ""],
      ["", "Thank you for your business!", "", "", "", ""],
    ];

    const ws = XLSX.utils.aoa_to_sheet(ws_data);

    // Merge cells for headers and formatting
    ws['!merges'] = [
      { s: { r: 0, c: 0 }, e: { r: 0, c: 3 } },  // Merge BRILLIANTS ELECTRONICS
      { s: { r: 1, c: 0 }, e: { r: 1, c: 3 } },  // Merge Making Technology work
      { s: { r: 2, c: 0 }, e: { r: 2, c: 3 } },  // Merge 142/5, Sakthivel Nagar
      { s: { r: 3, c: 0 }, e: { r: 3, c: 3 } },  // Merge Peravallur, Chennai - 600 082.
      { s: { r: 4, c: 0 }, e: { r: 4, c: 3 } },  // Merge Phone: 9840034153
      { s: { r: 5, c: 0 }, e: { r: 5, c: 3 } },  // Merge Email: brilliantelectronics.chennai@gmail.com
      { s: { r: 7, c: 0 }, e: { r: 7, c: 3 } },  // Merge Bill To:
      { s: { r: 8, c: 0 }, e: { r: 8, c: 3 } },  // Merge FUJITSU GENERAL INDIA PRIVATE
      { s: { r: 9, c: 0 }, e: { r: 9, c: 3 } },  // Merge Prestige Cosmopolitan, No:36
      { s: { r: 10, c: 0 }, e: { r: 10, c: 3 } }, // Merge 8th Floor Guindy Chennai-32
      { s: { r: 11, c: 0 }, e: { r: 11, c: 3 } }, // Merge Tamil Nadu 600032, India
      { s: { r: 12, c: 0 }, e: { r: 12, c: 3 } }  // Merge GSTIN: 33AADCF5791RIZY
    ];

    XLSX.utils.book_append_sheet(wb, ws, 'Invoice');
    XLSX.writeFile(wb, `${fileName}.xlsx`);
  }
}
