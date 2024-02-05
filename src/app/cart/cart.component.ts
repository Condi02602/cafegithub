import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CoreService } from '../core/core.service';
import { CartService } from '../service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{

  displayedColumns: string[] = ['id','name', 'Price', 'Category', 'image','quantity','total', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private dialog : MatDialog, private cartService: CartService,private coreService: CoreService, private cartApi:CartService){}

  menu:any=[];
  allMenu:any=0;

//   ngOnInit(): void {
//   this.cartApi.getMenuData().subscribe(res => {
//     this.menu = res;

//     // Initialize the MatTableDataSource with the menu data
//     this.dataSource = new MatTableDataSource(this.menu);

//     // Set the paginator and sort after dataSource is initialized
//     this.dataSource.paginator = this.paginator;
//     this.dataSource.sort = this.sort;

//     // Update the total amount
//     this.allMenu = this.cartApi.getTotalAmount();
//   });
//  }

ngOnInit(): void {
  this.cartApi.getMenuData().subscribe(res => {
    this.menu = res;
    // Assuming this.cartDataList is populated somewhere in your code
    this.allMenu = this.cartApi.getTotalAmount();
  });
}

  removeMenu(item:any){
    this.cartApi.removeCartData(item);
  }

  removeAllMenu(){
    this.cartApi.removeAllCart();
  }

  // applyFilter(event: Event) {
  //   const filterValue = (event.target as HTMLInputElement).value;
  //   this.dataSource.filter = filterValue.trim().toLowerCase();

  //   if (this.dataSource.paginator) {
  //     this.dataSource.paginator.firstPage();
  //   }
  // }
}
