import { Component } from '@angular/core';

@Component({
  selector: 'app-on-changes-parent',
  templateUrl: './on-changes-parent.component.html',
  styleUrls: ['./on-changes-parent.component.css'],
})
export class OnChangesParentComponent {
  selectedProductId = 1;

  increaseId(): void {
    if (this.selectedProductId < 20) {
      this.selectedProductId++;
    }
  }

  decreaseId(): void {
    if (this.selectedProductId > 1) {
      this.selectedProductId--;
    }
  }

  resetId(): void {
    this.selectedProductId = 1;
  }
}
