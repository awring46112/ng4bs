import { Component } from '@angular/core';
import { BackendApiService} from './services/backend-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private service: BackendApiService) {
    this.service.GetStuff().subscribe( data => {
      console.log(data);
    });
  }
}
