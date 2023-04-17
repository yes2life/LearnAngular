import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
        .myColor {
          color: white;
        }
    `]
})

export class AppComponent {
  title = 'basics-assignment-3';
  arrayLogMessages: string[] = [];
  logItem: number = 0;
  paragraphIsBlank: boolean = false;
  paragraphText: string = '';
  textColor: string = 'white';
  bgColor: string = 'blue';

  constructor() {
    this.paragraphText = 'Secret Password = tuna';
    this.logItem = 0;
  }

  setFormatting(){    
    this.textColor = 'white';
    this.bgColor= 'blue';
    console.log('Special formatting set. Button has been clicked ' + this.logItem + ' times.');
  }

  toggleParagraphDisplay(){

    // toggle paragraph: if blank, set to 'Secret Password = tuna'; otherwise, clear
    this.paragraphText = this.paragraphText ? '' : 'Secret Password = tuna';
    this.logButtonClicks();
  }

  logButtonClicks(){
    // increment logItem by 1
    this.logItem++;
    // add info to logging array
    this.arrayLogMessages.push(this.logItem.toString());
    // output log
    console.log('Button cliked ' + this.logItem + ' time(s). Array log: ' + this.arrayLogMessages );

    if (this.logItem >= 5) {
      this.setFormatting();
    }
  }
}
