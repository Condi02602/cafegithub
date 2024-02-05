import { Component } from '@angular/core';
import * as pdfMake from 'pdfmake/build/pdfmake';
import * as pdfFonts from 'pdfMake/build/vfs_fonts';

@Component({
  selector: 'app-bills',
  templateUrl: './bills.component.html',
  styleUrls: ['./bills.component.css']
})
export class BillsComponent {
generatePdf(){
  let docDefinition = {
    content:[
      'This is a sample pdf printed with pdfMake'
    ]
  };
  pdfMake.createPdf(docDefinition).open();
}

}
