import { Component, OnInit } from '@angular/core';
import { EventServiceService } from 'src/app/shared/event-service.service';
import { FavorisService } from 'src/app/shared/favoris.service';

@Component({
  selector: 'app-favoris',
  templateUrl: './favoris.component.html',
  styleUrls: ['./favoris.component.css']
})
export class FavorisComponent implements OnInit {

  constructor(private favorisrv:FavorisService,
    ) {

   }

  ngOnInit(): void {
  }
  deleteEvent(id:number){
    this.favorisrv.delete(id).subscribe(
    );
    location.reload()
  }
}
