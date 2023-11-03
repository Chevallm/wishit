import { Component, Pipe, PipeTransform, Input } from '@angular/core';

@Pipe({
  name: 'fi',
})
export class FiPipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    return `fi fi-rr-${value}`;
  }
}

@Component({
  selector: 'wi-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {

  @Input() icon: string = '';

}
