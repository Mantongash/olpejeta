import { Component, OnInit } from '@angular/core';
import { latLng, tileLayer } from 'leaflet';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent{
  highcharts = Highcharts;
  chartOptions = {   
     chart: {
        type: "spline"
     },
     title: {
        text: "Birds Against Sightings"
     },
     subtitle: {
        text: "Source: Olpejeta Conservancy"
     },
     xAxis:{
        categories:["Jan", "Feb", "Mar", "Apr", "May", "Jun",
           "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
     },
     yAxis: {          
        title:{
           text:"Birds"
        } 
     },
     tooltip: {
        valueSuffix:" Sightings"
     },
     series: [
        {
           name: 'Northen Olpejeta',
           data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2,26.5, 23.3, 18.3, 13.9, 9.6]
        },
        {
           name: 'Eastern Olpejeta',
           data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8,24.1, 20.1, 14.1, 8.6, 2.5]
        },
        {
           name: 'Western Olpejeta',
           data: [1, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
        },
        {
           name: 'Southern Olpejeta',
           data: [4, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
        }
     ]
  };
}

  // options = {
  //   layers: [
  //     tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  //       attribution: '&copy; OpenStreetMap contributors'
  //     })
  //   ],
  //   zoom: 13,
  //   center: latLng([ 0.044071, 36.932078 ])
  // };

//   constructor() { }

//   ngOnInit() {
//   }

// }