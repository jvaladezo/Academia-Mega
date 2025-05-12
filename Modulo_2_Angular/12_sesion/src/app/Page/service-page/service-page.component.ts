import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../service/data.service';
import { HijeServiceComponent } from '../../components/hije-service/hije-service.component';

@Component({
  selector: 'app-service-page',
  imports: [FormsModule, HijeServiceComponent],
  templateUrl: './service-page.component.html',
  styleUrl: './service-page.component.css'
})
export class ServicePageComponent {
  newMessage = "";

  constructor(private dataService: DataService) { }

  updateMessage() {
    this.dataService.setMessage(this.newMessage)
  }
}
