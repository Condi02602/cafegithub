import { Component, Input, computed, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
export type MenuItem = {
  icon : string;
  label : string;
  // route : string; 
}
@Component({
  selector: 'app-custom-sidebar',
  templateUrl: './custom-sidebar.component.html',
  styleUrls: ['./custom-sidebar.component.css'],
  

})
export class CustomSidebarComponent {

  sidebarCollapsed = signal(false);
  @Input() set collapsed(val: boolean){
    this.sidebarCollapsed.set(val);
  }

menuItems = signal<MenuItem[]>([
  {
    icon: 'dashboard',
    label: 'Dashboard'
    // route: 'cafe/dashboard',
  },
  {
    icon: 'video_library',
    label: 'bills',
    // route: '/bills',
  },
  {
    icon: 'menu',
    label: 'Employee',
    // route: '/employee',
  },
  {
    icon: 'menu',
    label: 'Menu',
    // route: '/menu-items',
  },
  {
    icon: 'cart',
    label: 'Cart',
    // route: '/cart',
  }
]);

profilePicSize = computed(() => this.sidebarCollapsed() ? '32':'100');
}

isActive(route: string): boolean {
  return this.router.isActive(route, true);
}
