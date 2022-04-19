import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SearchComponent } from './search/search/search.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  routed = false;
  title = 'task';
  typesOfShoes: string[] = ['Search User', 'History'];
  option_selected : any;
  constructor(private router: Router){

  }


  selectOption(val: any){

    this.option_selected = val;
    this.router.navigateByUrl(val)
    if(val === 'dashboard'){
      this.routed = false;
    } else {
      this.routed = true;
    }
  }
}

