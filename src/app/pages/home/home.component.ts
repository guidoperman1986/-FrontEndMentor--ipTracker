import { ChangeDetectorRef, Component, NgZone, OnInit } from '@angular/core';

import * as mapboxgl from 'mapbox-gl';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IP } from '../../interface/ip.interface';

import { IptrackerService } from '../../services/iptracker.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  mapa: mapboxgl.map;
  ip: IP;

  ipS: string = '';
  location: string = '';
  timezone: string = '';
  isp:string = '';

  constructor(private ipService: IptrackerService, private changeDetectorRef: ChangeDetectorRef, private ngZone:NgZone) {

  }

  ngOnInit(): void {
    mapboxgl.accessToken = environment.mapboxKey;

    this.ipService.getIpAddress().subscribe((ipMia:any)=>{
      const { ip } = ipMia;
      this.buscarIP(ip);
    });
  }

  crearMap(lng= -58.4059338, lat= -34.6144254){
    this.mapa = new mapboxgl.Map({
      container: 'row-bottom', // container id
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [lng, lat], // lng, lat
      zoom: 16.6 // starting zoom
    });

    this.crearMarker(lng, lat);
  }

  buscarIP(ip: string): any{
    const nros = ip.split('.');
    const regEx = new RegExp(/^[0-9]+$/);
    let nrosOk = true;
    //controlo que sean todos numeros y que sea mayor a 0 y menor o igual a 255
    if (nros.length === 4){
      nros.forEach(nro => {
        if ((regEx.test(nro)) && ( parseInt(nro) > 0 && parseInt(nro) <= 255 )){

        }else{
          nrosOk = false;
          return;
        }
      });
    }

    if (nrosOk){
      this.ipService.getIpData(ip).subscribe((ipData: IP) => {
        this.ip = ipData;

        this.ipS      = ipData.ip;
        this.location = ipData.location.timezone;
        this.timezone = ipData.location.city;
        this.isp      = ipData.isp;

        const { lat, lng } = ipData.location;

        this.crearMap(lng, lat);

      });

    }
  }

  crearMarker(lng: number, lat: number){

    const marker = new mapboxgl.Marker({
      draggable: true
    }).setLngLat([lng, lat])
      .addTo(this.mapa);

    marker.on('drag', () => {

    });

  }


}