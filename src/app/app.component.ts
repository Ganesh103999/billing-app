import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BillingTableComponent } from "./billing-table/billing-table.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ BillingTableComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'billing-app';
}
