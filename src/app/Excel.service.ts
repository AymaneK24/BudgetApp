import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';

@Injectable({
  providedIn: 'root'
})
export class ExcelService {
  public csvContent: string = ''; // Variable to store CSV content

  constructor() { }

  public readExcel(file: File): Promise<any[]> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const bstr = e.target.result;
        const wb = XLSX.read(bstr, { type: 'binary' });
        const wsname = wb.SheetNames[0];
        const ws = wb.Sheets[wsname];
        const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
        resolve(data);
      };
      reader.onerror = (error) => reject(error);
      reader.readAsBinaryString(file);
    });
  }

  public convertToCSV(data: any[], fileName: string): void {
    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(data);
    const csv = XLSX.utils.sheet_to_csv(ws);
    this.csvContent = csv; // Store CSV content in a variable
  }
  
  public async uploadAndConvert(file: File): Promise<void> {
    try {
      const data = await this.readExcel(file);
      this.convertToCSV(data, 'output.csv'); // Provide the correct arguments: data and file name
    } catch (error) {
      console.error('Error converting Excel to CSV:', error);
    }
  }
  
}
