import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Wish } from '../../definitions/wish';

@Component({
  selector: 'wi-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.scss']
})
export class WishComponent {

  @Input()
  creationMode: boolean = true;

  @Input({ required: true })
  wish!: Wish;

  @Output()
  readonly onTaken = new EventEmitter();

  editTitle = false;


  take(): void {
    this.onTaken.emit();
  }

}
