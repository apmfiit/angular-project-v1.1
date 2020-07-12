import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { ListComponent } from '../list/list.component';

//import { ListComponent } from './list/list.component';

// class Item {
//   title: string;
//   price: number;
//   description: string;
//
//   constructor(title: string, price: number, description: string) {
//
//     this.title = title;
//     this.price = price;
//     this.description = description;
//   }
// }

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})

export class AddComponent {
  title: string;
  description: string;
  price: number;
  //items = ListComponent.items;

  addItem(title: string, price: number, description: string) {
    if(title==null || price==null || description==null)
      return;
    ListComponent.items.push(new DataService(title, price, description));
  }
}
