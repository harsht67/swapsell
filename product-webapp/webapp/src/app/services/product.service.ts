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

  URL = "http://localhost:9090";

  constructor(private http: HttpClient) { }

  // fetch all products
  fetchProducts(): void {
    this.http.get<Product[]>(this.URL+"/products2").subscribe(
      (products: Product[]) => {
        this.productsSubject.next(products);
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }

  fetchProductsForUser(email: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.URL+"/products/"+email);
  }

  // returns a single product by id 
  getProductById(productId: string): Observable<Product> {
    console.log(productId);
    return this.products$.pipe(
      map(products => products.find(product => product.id == productId))
    );
  }

  // returns products which include the keyword in the title 
  getProductsByKeyword(keyword: string): Observable<Product[]> {
    console.log(keyword);
    return this.products$.pipe(
      map(products => {
        return products.filter(product => product.title.toLowerCase().includes(keyword.toLowerCase()));
      })
    );
  }

  // returns products based on category 
  getProductsByCategory(category: string): Observable<Product[]> {
    console.log(category);
    return this.products$.pipe(
      map(products => {
        return products.filter(product => product.category.toLowerCase().includes(category.toLowerCase()));
      })
    );
  }

}