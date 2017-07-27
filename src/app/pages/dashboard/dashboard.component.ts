import { Component } from '@angular/core';
import { DashboardService } from './dashboard.service';
import {GlobalState} from 'app/global.state'
@Component({
  selector: 'dashboard',
  styleUrls: ['./dashboard.scss'],
  templateUrl: './dashboard.html'
})
export class Dashboard {
  data:any;
  user:any;
  deviceData:any;
  energyArr:any;
  constructor(private _DashboardService :DashboardService,private _global :GlobalState) {
  }

  ngOnInit() {
    this.data = this._DashboardService.getAll();
    this.user = this._global.getUser();
    this.getDeviceInfo();
  }

  getResponsive(padding, offset) {
    return this._DashboardService.getResponsive(padding, offset);
  }

  getDeviceInfo(){
    if(this.user['_id']){
      this._DashboardService.deviceInfo(this.user['_id'])
      .subscribe(data =>{
          console.log(data);
          this.parseResponse(data);
          
        },err =>{
          console.log(err);
        });
    }

  }

  parseResponse(res){
   let data:any = {}; 
   let array=[];
   let label=[];
    if(res.length > 0){
        data = res[0];
        data.device.forEach(function(a){
          array.push(parseInt(a.power));
          label.push(a.type);
        });
        this.data.simplePieData.series = array;
       // this.data.simplePieData.labels = label;
    }
  }

}
