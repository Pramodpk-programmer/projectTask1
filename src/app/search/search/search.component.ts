import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  userSearchQuery: any;
  userSerachResults: any =[];
  userFound = false;
  searchHistory: any = [];

  constructor(private service: ServiceService) { }

  ngOnInit(): void {
  }
  doFilter(event:any){

  }
  searchUser(){
    if( this.userSearchQuery && this.userSearchQuery.length() > 0) {
      this.service.getUsers().subscribe((response: any)=> {
        if(response) {
          this.searchHistory.push(this.userSearchQuery);
          localStorage.setItem('searchHistory', this.searchHistory);
          this.userSerachResults = response;
        }
      }, error => {
        // Error handling
      })
    }
  }
}
