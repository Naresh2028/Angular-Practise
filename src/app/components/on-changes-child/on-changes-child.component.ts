import { HttpClient } from '@angular/common/http';
import { Component, inject, Input, OnChanges, SimpleChanges } from '@angular/core';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}


@Component({
  selector: 'app-on-changes-child',
  templateUrl: './on-changes-child.component.html',
  styleUrls: ['./on-changes-child.component.css']
})
export class OnChangesChildComponent implements OnChanges {
  @Input() productId!:number; 

  private http = inject(HttpClient);


  private apiUrl = 'https://fakestoreapi.com/products';
  product!: Product;

  ngOnChanges(changes:SimpleChanges): void {
    if(changes['productId']){
      const currentId = changes['productId'].currentValue;
      const previousId = changes['productId'].previousValue;

      console.log(`product is changed ${currentId} is current ID, and ${previousId} is previous Id`);

      if(currentId){
        this.http.get<Product>(`${this.apiUrl}/${currentId}`).subscribe({
          next:(res) => {
            if(res){
              this.product = res;
            }
          },
          error:() => {
            alert('someting went wrong');
          }
        });
      }
    }
  }
}
