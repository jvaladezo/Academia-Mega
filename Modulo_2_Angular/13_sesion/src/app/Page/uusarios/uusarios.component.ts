import { Component, Output, EventEmitter } from '@angular/core';
import { UserService } from '../../service/user.service';
import { UserListComponent } from '../../components/user-list/user-list.component';
import { UserDetailComponent } from '../../components/user-detail/user-detail.component';

@Component({
  selector: 'app-uusarios',
  imports: [UserListComponent, UserDetailComponent],
  templateUrl: './uusarios.component.html',
  styleUrl: './uusarios.component.css'
})
export class UusariosComponent {

}
