import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from '../user.component';
import { DashboardComponent } from 'src/app/dashboard/dashboard.component';
import { SidebarComponent } from 'src/app/sidebar/sidebar.component';
import { EmployeeComponent } from 'src/app/employee/employee.component';
import { MenuItemsComponent } from 'src/app/menu-items/menu-items.component';
import { CartComponent } from 'src/app/cart/cart.component';
import { PaymentGatewayComponent } from 'src/app/payment-gateway/payment-gateway.component';
import { BillsComponent } from 'src/app/bills/bills.component';

const routes: Routes = [
  {path:"", component:UserComponent,
  children:[
    {path: "dashboard", component:DashboardComponent}, 
  {path: "sidebar", component:SidebarComponent},
  {path: "employee", component:EmployeeComponent},
  {path: "menu-items", component:MenuItemsComponent},
  {path: "cart", component:CartComponent},
  {path: "payment", component:PaymentGatewayComponent},
  {path: "bills", component:BillsComponent},
  // {path: "user", component:UserComponent}
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingRoutingModule { }
