import { Component, Input } from '@angular/core';

@Component({
    selector: 'wi-input',
    templateUrl: './input.component.html',
    styleUrls: ['./input.component.scss'],
    standalone: true
})
export class InputComponent {

  @Input() placeholder = '';
  @Input() type = 'text';

}
