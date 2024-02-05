import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartDataList:any = [];
  menuList = new BehaviorSubject<any>([]);

  constructor(private http:HttpClient) { }

  // deleteMenu(id:number): Observable<any>{
  //   return this.http.delete(`https://localhost:44372/api/Menu/${id}`)
  // }

  getMenuData(){
    return this.menuList.asObservable();
  }

  setMenu(menu:any){
    this.cartDataList.push(...menu);
    this.menuList.next(menu)
  }


  addToCart(menu:any){
    this.cartDataList.push(menu);
    this.menuList.next(this.cartDataList);
    this.getTotalAmount();
    console.log(this.cartDataList);
  }

  getTotalAmount(): number {
    let grandTotal = 0;
    this.cartDataList.forEach((a: any) => {
      grandTotal += a.price;
    });
    return grandTotal;
  }

  removeCartData(menu:any){
    this.cartDataList.map((a:any, index:any)=>{
      if(menu.id === a.id){
        this.cartDataList.splice(index,1)
      }
    })
  }

  removeAllCart(){
    this.cartDataList =[]
    this.menuList.next(this.cartDataList)
  }
}
