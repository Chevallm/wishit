import { Component, Pipe, PipeTransform, Input } from '@angular/core';

@Pipe({
    name: 'fi',
    standalone: false
})
export class FiPipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    return `fi ${value}`;
  }
}

@Component({
    selector: 'wi-icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.scss'],
    standalone: false
})
export class IconComponent {

  @Input() icon: string = '';

}
