import { 
  Component
 } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cmp-databinding-assignment';

  gameComponents = [{type: 'even', time: 0, color: 'blue'}];


  onStartEvent(eventData: {type: string, time: number, color: string}): void {
    this.gameComponents.push({
      type: eventData.type, 
      time: eventData.time,
      color: eventData.color
    });

    console.log(this.gameComponents);
  }


}
