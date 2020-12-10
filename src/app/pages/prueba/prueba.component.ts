import { Component, OnInit } from '@angular/core';
import { IptrackerService } from 'src/app/services/iptracker.service';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.scss']
})
export class PruebaComponent implements OnInit {

  ip:any;

  constructor(private ipService:IptrackerService) { }

  ngOnInit(): void {
    
    
    
  }
  
  generarData(){
    this.ipService.getIpData('8.8.8.8').subscribe(data => this.ip = data);
    
  }

  generarDataInput(ip){
    this.ipService.getIpData(ip).subscribe(data => this.ip = data);
    
  }

}
