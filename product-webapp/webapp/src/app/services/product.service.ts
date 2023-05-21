import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Product } from '../modals/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productsSubject: BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([]);
  public products$: Observable<Product[]> = this.productsSubject.asObservable();

  URL = "http://localhost:9090/products2";

  constructor(private http: HttpClient) { }

  // fetch all products
  fetchProducts(): void {
    this.http.get<Product[]>(this.URL).subscribe(
      (products: Product[]) => {
        this.productsSubject.next(products);
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  // returns a single product by id 
  getProductById(productId: string): Observable<Product> {
    console.log(productId);
    return this.products$.pipe(
      map(products => products.find(product => product.id == productId))
    );
  }

}