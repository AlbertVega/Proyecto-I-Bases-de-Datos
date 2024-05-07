import { Component, Output, EventEmitter, OnInit, HostListener} from '@angular/core';
import { navbarData } from './prof-nav-data';

interface SideNavToggle{
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-prof-sidenav',
  templateUrl: './prof-sidenav.component.html',
  styleUrl: './prof-sidenav.component.css'
})
export class ProfSidenavComponent implements OnInit{

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter();
  screenWidth = 0;
  collapsed = false;
  navData = navbarData;
  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  // Listen for window resize events
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.screenWidth = window.innerWidth;
    if (this.screenWidth <= 768) { // 768px is the breakpoint for md screens
      this.collapsed = false;
      this.onToggleSideNav.emit({screenWidth: this.screenWidth, collapsed: this.collapsed});
    }
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({screenWidth: this.screenWidth, collapsed: this.collapsed});
  }

  closeSidenav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({screenWidth: this.screenWidth, collapsed: this.collapsed});
  }

}
