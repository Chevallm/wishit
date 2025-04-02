import {Component, Input} from '@angular/core';
import {NgClass} from "@angular/common";
import {FiPipe} from "../../pipes/fi.pipe";

@Component({
  selector: 'wi-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss'],
  imports: [
    NgClass, FiPipe
  ],
  standalone: true
})
export class IconComponent {

  @Input() icon: string = '';

}
