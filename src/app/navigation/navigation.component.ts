import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent {
  navigation_active: string = '#';
  setnavigation_active(value: string) {
    this.navigation_active = value;
  }
}
