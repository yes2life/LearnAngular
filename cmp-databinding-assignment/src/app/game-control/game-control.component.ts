import { 
  Component, 
  EventEmitter, 
  Output 
} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  type: string = '';
  color: string = '';
  time: number = 0;
  stop: boolean = false;
  ref: any;

  

  @Output() startEvent = new EventEmitter<{type: string, time: number, color: string}>();

  onStartClick() {
    // emit an incremented number each second
    this.ref =  setInterval(() => {

        // increment number
        this.time++;

        // test for even/odd and set type
        this.type = this.time%2 === 0 ? 'even' : 'odd';

        // set color in same way
        this.color = this.time%2 === 0 ? 'blue' : 'red';

        // emit value
        this.startEvent.emit({type: this.type, time: this.time, color: this.color});

        console.log(`${this.type}, ${this.time}, ${this.color}`);

    }, 1000);
  }

  onStopClick() {
    clearInterval(this.ref);
  }
}
