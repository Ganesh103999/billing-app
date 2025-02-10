import { Component, inject } from '@angular/core';
import { ItemService } from '../../services/item.service';

@Component({
  standalone: true,
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  private itemService = inject(ItemService); // ✅ Inject ItemService
  items: any[] = [];

  constructor() {
    this.loadItems();
  }

  loadItems() {
    this.itemService.getItems().subscribe(data => {
      this.items = data;
      console.log("Items from backend:", this.items);
    });
  }
}
