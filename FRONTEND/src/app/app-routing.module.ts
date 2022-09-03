import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HeaderComponent} from "./layouts/header/header.component";
import {NewsFeedComponent} from "./components/site/news-feed/news-feed.component";
import {EventsComponent} from "./components/site/events/events.component";

const routes: Routes = [

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
