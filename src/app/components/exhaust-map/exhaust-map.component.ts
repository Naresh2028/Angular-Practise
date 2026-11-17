import { Component } from '@angular/core';

interface login {
  userName:string;
  password:string
}

@Component({
  selector: 'app-exhaust-map',
  templateUrl: './exhaust-map.component.html',
  styleUrls: ['./exhaust-map.component.css']
})

// exhaustMap ignores all new clicks/triggers while an active HTTP request is still running

export class ExhaustMapComponent {

}
