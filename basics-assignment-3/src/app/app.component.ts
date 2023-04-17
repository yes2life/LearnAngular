import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basics-assignment-3';
  arrayLogMessages: string[] = [];
  logItem: number = 0;
  paragraphIsBlank: boolean = false;
  paragraphText: string = '';

  constructor() {
    this.paragraphText = 'Secret Password = tuna';
  }

  toggleParagraphDisplay(){
    if (this.paragraphText) {
      
    } else {
      
    }
  }

  logButtonClicks(){
    // increment logItem by 1
    this.logItem++;

    // toggle paragraph: if blank, set to 'Secret Password = tuna'; otherwise, clear
    this.paragraphText = this.paragraphText ? '' : 'Secret Password = tuna';

    if (this.logItem >= 5) {
    
    }
  }
}
