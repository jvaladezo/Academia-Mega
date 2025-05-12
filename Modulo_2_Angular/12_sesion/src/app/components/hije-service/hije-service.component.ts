import { Component } from '@angular/core';
import { DataService } from '../../service/data.service';

@Component({
  selector: 'app-hije-service',
  imports: [],
  templateUrl: './hije-service.component.html',
  styleUrl: './hije-service.component.css'
})
export class HijeServiceComponent {
  message ="";

  constructor(private dataService: DataService){

  }

  ngDoCheck(){
    this.message = this.dataService.getMessage();
  }
}
