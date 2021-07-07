import { Component, OnInit } from '@angular/core';
import { icon, latLng, marker, polyline, tileLayer } from 'leaflet';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent{

  // Define our base layers so we can reference them multiple times
  streetMaps = tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });
  wMaps = tileLayer('http://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', {
    detectRetina: true,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  });
  
 // Marker for birds species
 ostriches = marker([ 0.0452, 36.9228 ], {
  icon: icon({
    iconSize: [ 20, 30 ],
    iconAnchor: [ 13, 41 ],
    iconUrl: 'leaflet/marker-icon.png',
    shadowUrl: 'leaflet/marker-shadow.png'
  })
});

Bustards = marker([ 0.0462, 36.9328 ], {
  icon: icon({
    iconSize: [ 20, 30 ],
    iconAnchor: [ 13, 41 ],
    iconUrl: 'leaflet/marker-icon.png',
    shadowUrl: 'leaflet/marker-shadow.png'
  })
});

GuineaFowl = marker([ 0.0442, 36.9658 ], {
  icon: icon({
    iconSize: [ 20, 30 ],
    iconAnchor: [ 13, 41 ],
    iconUrl: 'leaflet/marker-icon.png',
    shadowUrl: 'leaflet/marker-shadow.png'
  })
});

Turacos = marker([ 0.0412, 36.9758 ], {
  icon: icon({
    iconSize: [ 20, 30 ],
    iconAnchor: [ 13, 41 ],
    iconUrl: 'leaflet/marker-icon.png',
    shadowUrl: 'leaflet/marker-shadow.png'
  })
});

Sandgrouse = marker([ 0.0332, 36.9700 ], {
  icon: icon({
    iconSize: [ 20, 30 ],
    iconAnchor: [ 13, 41 ],
    iconUrl: 'leaflet/marker-icon.png',
    shadowUrl: 'leaflet/marker-shadow.png'
  })
});

layersControl = {
  baseLayers: {
    'Street Maps': this.streetMaps,
    'Wikimedia Maps': this.wMaps
  },
  overlays: {
    'Black winged kite': this.Bustards,
    'Guineafowl': this.GuineaFowl,
    'New World quai': this.ostriches,
    'Turacos': this.Turacos,
    'Sandgrouse': this.Sandgrouse
  }
};


options = {
  layers: [ this.streetMaps, this.Bustards, this.GuineaFowl, this.ostriches,this.Turacos,this.Sandgrouse,
    tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    })
  ],
  zoom: 12,
  center: latLng([ 0.044071, 36.932078 ])
};

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

//   options = {
//     layers: [
//       tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         attribution: '&copy; OpenStreetMap contributors'
//       })
//     ],
//     zoom: 13,
//     center: latLng([ 0.044071, 36.932078 ])
//   };

//   constructor() { }

//   ngOnInit() {
//   }

// }