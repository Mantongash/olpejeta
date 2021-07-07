import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { Sightings } from '../../models/user.model';
import { icon, latLng, marker, tileLayer } from 'leaflet';

@Component({
  selector: 'app-sightings',
  templateUrl: './sightings.component.html',
  styleUrls: ['./sightings.component.css']
})

export class SightingsComponent implements OnInit {
  sightings:Sightings [];

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
  constructor() { }

  ngOnInit(){ 
    // return this.dataservice.getSightings()
    //   .subscribe(data => this.sightings = data)
  }
}