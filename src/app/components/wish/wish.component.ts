import {Component, EventEmitter, inject, input, output, Output} from '@angular/core';
import {Wish} from '../../definitions/wish';
import {IconComponent} from "../icon/icon.component";
import {ButtonComponent} from "../button/button.component";
import {CurrencyPipe, DecimalPipe} from "@angular/common";
import {FormBuilder, ReactiveFormsModule} from "@angular/forms";

@Component({
  selector: 'wi-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.scss'],
  standalone: true,
  imports: [IconComponent, ButtonComponent, CurrencyPipe, DecimalPipe, ReactiveFormsModule]
})
export class WishComponent {

  private readonly fb = inject(FormBuilder);

  creationMode = input(true);

  wish = input.required<Wish>();

  readonly onTaken = output()

  editTitle = false;

  wishForm = this.fb.group({
    title: this.fb.control<string>(this.wish().title),
    price: this.fb.control<number>(this.wish().price ?? 0),
  })


  take(): void {
    this.onTaken.emit();
  }

}
