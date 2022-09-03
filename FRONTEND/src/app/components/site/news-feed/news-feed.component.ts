import { Component, OnInit } from '@angular/core';

import { Poste } from '../../../Models/poste';
import { PosteService } from '../../../shared/poste.service';
import {Observable} from "rxjs";
import {Router} from "@angular/router";
import {Comments} from "../../../Models/comments"
import{PosteDetailComponent} from "../../site/poste-detail/poste-detail.component"

import {MatDialog,MatDialogConfig} from '@angular/material/dialog';


@Component({
  selector: 'app-news-feed',
  templateUrl: './news-feed.component.html',
  styleUrls: ['./news-feed.component.css']
})
export class NewsFeedComponent implements OnInit {
  postes: any[] = [];
  ballance: any;
  public: any;
  blocks: any;
  posteFilter: any;
  comment: Comments = new Comments();
  poste: Poste= new Poste();

  constructor(private ps: PosteService,
              private router: Router,private dialog:MatDialog) {}

  ngOnInit(): void {
    this.ps.getPostes().subscribe(data => {
      this.postes = data;
    })
    this.ps.getBalance().subscribe(data => {
      this.ballance = data;

    })
    this.ps.getPublicKey().subscribe(data => {
      this.public = data;

    })

    this.ps.getBlock().subscribe(data => {
      this.blocks = data;

    })

  }


  likepost(id: number) {
    this.ps.getLikes(id)
      .subscribe(
        data => {
          console.log(data);

          this.ps.getPostes().subscribe(data => {
            this.postes = data
          })
        },
        error => console.log(error));
  }

  Dlikepost(id: number) {
    this.ps.getDLikes(id)
      .subscribe(
        data => {
          console.log(data);

          this.ps.getPostes().subscribe(data => {
            this.postes = data
          })
        },
        error => console.log(error));
  }


  deleteStudent(id: number) {
    this.ps.deletePoste(id)
      .subscribe(
        data => {
          console.log(data);

          this.ps.getPostes().subscribe(data => {
            this.postes = data
          })
        },
        error => console.log(error));


  }


  displayBalance() {
    this.ps.getBalance().subscribe(
      ballancee => {
        this.ballance = ballancee.json();
        console.log(this.ballance);
      });
  }


  displayPKey() {
    this.ps.getPublicKey().subscribe(
      publicc => {
        this.public = publicc.json();
        console.log(this.public);
      });
  }

  displayBlock() {
    this.ps.getBlock().subscribe(
      block => {
        this.blocks = block.json();
        console.log(this.public);
      });
  }




  reloadData() {
    this.ps.getPostes().subscribe(
      postes => {
        this.postes = postes.json();
        console.log(this.postes);
      });
  }


  createComment(id: number): void {
    this.ps.createComment(this.comment, id)
      .subscribe(data => {


      });


    this.ps.getPostes().subscribe(data => {
      this.postes = data
    })
  }


  createPoste(): void {
    this.ps.AddPoste(this.poste)
      .subscribe(data => {


      });

  }

  openPoste(p:Poste){
    const config=new MatDialogConfig();
    config.width="10%";

    this.dialog.open(PosteDetailComponent,{
      data: p
    });
  }


}

