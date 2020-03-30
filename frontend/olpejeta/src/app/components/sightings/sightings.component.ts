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
    height: 700
  },
  title: {
    text: 'Sample line Plot'
  },
  credits: {
    enabled: false
  },
  tooltip: {
    formatter: function() {
      return 'x: ' + Highcharts.dateFormat('%e %b %y %H:%M:%S', this.x) +
        ' y: ' + this.y.toFixed(2);
    }
  },
  xAxis: {
    type: 'datetime',
    labels: {
      formatter: function() {
        return Highcharts.dateFormat('%e %b %y', this.value);
      }
    }
  },
  series: [
    {
      name: 'bird count',
      turboThreshold: 500000,
      data: []
    },
    
    
  ]
}
subscription: Subscription;
constructor(private http: HttpClient) { }

ngOnInit(){
  // const source = interval(10000);

  
  const apiLink = 'https://olpejeta-apis.000webhostapp.com/api/sightings';
  this.getApiResponse(apiLink).then(
    data => {
      const updated_bird_data = [];
      const updated_abnormal_data = [];
      data.forEach(row => {
        const temp_row = [
          new Date(row.timestamp).getTime(),
          row.value
        ];
        row.Bird === 1 ? updated_bird_data.push(temp_row) : updated_abnormal_data.push(temp_row);
        
      });
      this.option.series[0]['data'] = updated_bird_data;
      Highcharts.chart('container', this.option);
    },
    error => {
      console.log('Something went wrong.');
    })
  // );
  ;
}

async getApiResponse(url: string) {  
  const res = await this.http.get<any[]>(url, {})  
    .toPromise();  
  return res; 
}
}