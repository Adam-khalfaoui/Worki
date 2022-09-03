import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './layouts/header/header.component';
import { NewsFeedComponent } from './components/site/news-feed/news-feed.component';

import {HttpClientModule} from "@angular/common/http";
import { PosteDetailComponent } from './components/site/poste-detail/poste-detail.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MomentModule } from 'ngx-moment';
import {NgPipesModule} from 'ngx-pipes';

import { ModalModule } from '../app/_modal';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {PrettyJsonModule} from 'angular2-prettyjson';
import {FormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDialog,MatDialogConfig,MatDialogModule} from '@angular/material/dialog';
import { DatePipe } from '@angular/common'
import {LoginComponent} from "./components/site/login/login.component";


import {ProfilComponent} from "./components/site/profil/profil.component";
import {EventsComponent} from "./components/site/events/events.component";
import {FavorisComponent} from "./components/site/favoris/favoris.component";



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NewsFeedComponent,
    PosteDetailComponent,
    LoginComponent,
    EventsComponent,
    FavorisComponent,
    ProfilComponent,



  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    MomentModule,
    Ng2SearchPipeModule ,
    ModalModule,
    FormsModule,
    MatDialogModule,
    PrettyJsonModule,
    NgPipesModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[NewsFeedComponent]
})
export class AppModule { }
