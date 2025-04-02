import {CdkDragDrop, CdkDropList, moveItemInArray as moveWishInList} from '@angular/cdk/drag-drop';
import {Component, inject} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Wish} from 'src/app/definitions/wish';
import {collection, Firestore} from "@angular/fire/firestore";
import {ButtonComponent} from "../../components/button/button.component";
import {IconComponent} from "../../components/icon/icon.component";
import {NgForOf} from "@angular/common";
import {WishComponent} from "../../components/wish/wish.component";

@Component({
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss'],
  standalone: true,
  imports: [ReactiveFormsModule, CdkDropList, ButtonComponent, IconComponent, NgForOf, WishComponent]
})
export class NewComponent {
  wishs: Wish[] = [
    {
      title: 'Playstation 5',
      price: 500,
      gifter: 'azeaz6+5fz1f65az',
    },
    {
      title: 'Maillot du XV de France',
      price: 90.50,
    },
    {
      title: 'Place de concert',
      price: 40,
    }
  ];
  addForm = new FormGroup({
    title: new FormControl('')
  })
  private readonly fb = inject(FormBuilder);
  form = this.fb.group({
    title: this.fb.control<string>('Untitled list', Validators.required),
    wishs: this.fb.array<Wish>([]),
  })
  addWishForm = this.fb.group({
    title: this.fb.control<string>('', Validators.required),
    price: this.fb.control<number>(0, Validators.required),
  });
  private readonly firestore = inject(Firestore);
  private readonly wishlistCollection = collection(this.firestore, 'wishlist');

  drop(event: CdkDragDrop<string[]>): void {
    moveWishInList(this.wishs, event.previousIndex, event.currentIndex);
  }

  add(): void {
    const wishForm = this.fb.group({
      title: this.fb.control<string>('', Validators.required),
      price: this.fb.control<number>(0, Validators.required),
    });
    //this.form.controls.wishs.push();
  }

  save() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    console.log(this.form.value);
    //addDoc(this.wishlistCollection, {...this.form.value});
  }

}
