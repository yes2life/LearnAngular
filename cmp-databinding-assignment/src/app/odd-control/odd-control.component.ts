import { 
  Component,
  Input
} from '@angular/core';

@Component({
  selector: 'app-odd-control',
  templateUrl: './odd-control.component.html',
  styleUrls: ['./odd-control.component.css']
})
export class OddControlComponent {
  @Input('odd') gameComponent = {type: '', time: 0, color: ''};

}
