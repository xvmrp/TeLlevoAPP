import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-role-selection',
  templateUrl: './role-selection.page.html',
  styleUrls: ['./role-selection.page.scss'],
})
export class RoleSelectionPage {

  constructor(private router: Router) {}

  selectConductor() {
    this.router.navigate(['/conductor']);
  }

  selectPasajero() {
    this.router.navigate(['/pasajero']);
  }
}
