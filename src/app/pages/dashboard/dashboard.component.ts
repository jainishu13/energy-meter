import { Component } from '@angular/core';
import { DashboardService } from './dashboard.service';
@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.scss'],
  templateUrl: './dashboard.html'
})
export class Dashboard {
  data:any;
  constructor(private _DashboardService :DashboardService) {
  }

  ngOnInit() {
    this.data = this._DashboardService.getAll();
  }

  getResponsive(padding, offset) {
    return this._DashboardService.getResponsive(padding, offset);
  }

}
