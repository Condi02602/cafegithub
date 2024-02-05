import { Component, computed, signal } from '@angular/core';
import { CustomSidebarComponent } from './custom-sidebar/custom-sidebar.component';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  // collapsed = signal(false);
  // sidebarWidth = computed(() => this.collapsed() ? '65px':'250px');
}

