import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Sighting } from '../../models/user.model';
import { latLng, tileLayer } from 'leaflet';
import * as Highcharts from 'highcharts';  
import { HttpClient } from '@angular/common/http';  
import { interval, Subscription } from 'rxjs';  


declare var require: any;  
let Boost = require('highcharts/modules/boost');  
let noData = require('highcharts/modules/no-data-to-display');  
let More = require('highcharts/highcharts-more'); 


Boost(Highcharts);  
noData(Highcharts);  
More(Highcharts);  
noData(Highcharts); 

@Component({
  selector: 'app-sightings',
  templateUrl: './sightings.component.html',
  styleUrls: ['./sightings.component.css']
})

export class SightingsComponent implements OnInit {
  sightings:Sighting [];

  options = {
    layers: [
      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap contributors'
      })
    ],
    zoom: 13,
    center: latLng([ 0.044071, 36.932078 ])
  };


  public option: any = {  
    chart: {  
      type: 'line',  
      height: 500  
    },  
    title: {  
      text: 'Sample Scatter Plot'  
    },  
    credits: {  
      enabled: false  
    },  
    tooltip: {  
      formatter: function() {  
        return 'x: ' +  this.x +   '  y: ' + this.y;  
      }  
    },  
    xAxis: {  
      categories: []  
    },  
    series: [  
      {  
        name: 'Mr.bird',  
        data: []  
      },  
      {  
        name: 'Mr. Pathan',  
        data: []  
      }  
    ]  
  }  
  subscription: Subscription;  
  constructor(private http: HttpClient) { }  
  ngOnInit(){  
    // update data again and again after every 5 seconds interval  
    //const source = interval(5000);  
    // My dummy API  
    const apiLink = 'https://api.myjson.com/bins/zg8of';  
    this.getApiResponse(apiLink).then(  
    //this.subscription = source.subscribe(val =>this.getApiResponse(apiLink).then(  
      data => {  
        const birdarr = [];  
        const pathanArr = [];  
        const xAxisArr = [];  
        data.forEach(row => {  
          const temp_row = [  
            row.Sales_Figure  
          ];  
          if(xAxisArr.find(ob => ob === row.Month) === undefined){  
             xAxisArr.push(row.Month)  
          }  
          row.Name === 'Faisal' ? birdarr.push(temp_row) : pathanArr.push(temp_row);  
        });  
        this.option.xAxis['categories'] = xAxisArr;  
        this.option.series[0]['data'] = birdarr;  
        this.option.series[1]['data'] = pathanArr;  
        Highcharts.chart('container', this.option);  
      },  
      error => {  
        console.log('Something went wrong.');  
      })  
    //)  
    ;  
  }  
  async getApiResponse(url: string) {  
    const res = await this.http.get<any[]>(url, {})  
      .toPromise();  
    return res;  
  }  
}