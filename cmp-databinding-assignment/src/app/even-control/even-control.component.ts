import { 
  Component,
  Input 
} from '@angular/core';

@Component({
  selector: 'app-even-control',
  templateUrl: './even-control.component.html',
  styleUrls: ['./even-control.component.css']
})
export class EvenControlComponent {
  @Input('even') evenComponent: {type: string, time: number, color: string};

  constructor() {
    this.evenComponent = {type: '', time: 0, color: ''};
  }
}
