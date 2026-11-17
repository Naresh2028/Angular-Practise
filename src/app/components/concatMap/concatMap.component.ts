import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { concatMap, range} from 'rxjs';

export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

@Component({
  selector: 'app-concat',
  templateUrl: './concatMap.component.html',
  styleUrls: ['./concatMap.component.css']
})
export class ConcatMapComponent {
  
  private url = 'https://fakestoreapi.com/products';
  products:Product[] = [];

  constructor(private http:HttpClient){}

  fetchProducts(){
    
    range(1,3).pipe(
      concatMap(id => {
        return this.http.get<Product>(`${this.url}/${id}`)
      })
    ).subscribe({
      next:(res) => {
        if(res){
          this.products.push(res);
        }
      }
    })

  }

}
