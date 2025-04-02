import { Component, Input } from '@angular/core';

@Component({
    selector: 'wi-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    standalone: false
})
export class ButtonComponent {

  @Input() color: 'primary' | 'secondary' | 'default' = 'default';
  @Input() disabled = false;

}
