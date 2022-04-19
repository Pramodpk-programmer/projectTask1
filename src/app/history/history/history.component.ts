import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/service.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  searchHistory: any;
  userSerachResults: any;
  constructor(private service: ServiceService) { }

  ngOnInit(): void {
    this.searchHistory = localStorage.getItem('searchHistory');
  }
  getUserDetails(val: any) {
    this.service.getUsers().subscribe((response: any)=> {
      if(response) {
        this.userSerachResults = response;
      }
    }, error => {
      // Error handling
    })
  }
  removeFromHistory(val:any){
    this.searchHistory = this.searchHistory.filter(function(item: any) {
      return item !== val
    })
    localStorage.setItem('searchHistory', this.searchHistory)
  }

}
