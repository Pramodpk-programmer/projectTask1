import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HistoryComponent } from './history/history/history.component';
import { SearchComponent } from './search/search/search.component';

const routes: Routes = [
  {
    path:'dashboard',
    component: AppComponent
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'history',
    component: HistoryComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
