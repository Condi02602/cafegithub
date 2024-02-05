import { Component, OnInit } from '@angular/core';
import { subscribeOn } from 'rxjs';
import { MenuService } from '../service/menu.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-menu-items',
  templateUrl: './menu-items.component.html',
  styleUrls: ['./menu-items.component.css']
})
export class MenuItemsComponent implements OnInit{
  menuList:any;
  constructor(private api:MenuService, private cartApi:CartService){}

  ngOnInit(): void {
    this.api.getMenu().subscribe(res=>{
      this.menuList=res;
      this.menuList.forEach((a:any)=>{
        Object.assign(a,{quantity:1, total:a.Price})
      })
    })
  }

  addtoCart(item:any){
    this.cartApi.addToCart(item);
  }
  
}
