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
  arrayLogMessages: number[] = [];
  logItem: number = 0;
  showSecret: boolean = true;
  paragraphText: string = '';
  textColor: string = 'white';
  // bgColor: string = 'blue';

  toggleParagraphDisplay(){

    // toggle paragraph: if blank, set to 'Secret Password = tuna'; otherwise, clear
    this.paragraphText = this.paragraphText ? '' : 'Secret Password = tuna';

    this.showSecret = !this.paragraphText;
    this.logButtonClicks();
  }

  logButtonClicks(){
    // increment logItem by 1
    this.logItem++;
    // add info to logging array
    this.arrayLogMessages.push(this.logItem);
    // output log
    console.log('Button cliked ' + this.logItem + ' time(s). Array log: ' + this.arrayLogMessages );
  }
}
