import {Component, Input} from '@angular/core';
import {ColorMapPipe} from "../../pipes/color-map.pipe";
import {TextColorMapPipe} from "../../pipes/text-color-map.pipe";

@Component({
    selector: 'wi-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss'],
    standalone: true,
    imports: [ColorMapPipe, TextColorMapPipe]
})
export class ButtonComponent {

  @Input() color: 'primary' | 'secondary' | 'default' = 'default';
  @Input() disabled = false;

}
