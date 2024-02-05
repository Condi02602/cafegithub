import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  collapsed = signal(false);
  sidebarWidth = computed(() => this.collapsed() ? '65px':'250px');
}
