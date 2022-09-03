import {Component, Inject, OnInit} from '@angular/core';
import {AppComponent} from '../../../app.component';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalService } from '../../../_modal';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Poste} from "../../../Models/poste";
@Component({
  selector: 'app-poste-detail',
  templateUrl: './poste-detail.component.html',
  styleUrls: ['./poste-detail.component.css']
})
export class PosteDetailComponent implements OnInit {

  constructor(private modalService: ModalService,@Inject(MAT_DIALOG_DATA) public data: Poste) { }

  ngOnInit(): void {
    this.loadScript('assets/js/utils/app.js');
    this.loadScript('assets/js/utils/page-loader.js');
    this.loadScript('assets/js/vendor/simplebar.min.js');
    this.loadScript('assets/js/utils/liquidify.js');
    this.loadScript('assets/js/vendor/xm_plugins.min.js');
    this.loadScript('assets/js/vendor/tiny-slider.min.js');
    this.loadScript('assets/js/vendor/Chart.bundle.min.js');
    this.loadScript('assets/js/global/global.hexagons.js');
    this.loadScript('assets/js/global/global.tooltips.js');
    this.loadScript('assets/js/global/global.popups.js');
    this.loadScript('assets/js/header/header.js');
    this.loadScript('assets/js/sidebar/sidebar.js');
    this.loadScript('assets/js/content/content.js');
    this.loadScript('assets/js/form/form.utils.js');
    this.loadScript('assets/js/utils/svg-loader.js');

  }
  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

  loadScript(url: string) {
    const body = <HTMLDivElement> document.body;
    const script = document.createElement('script');
    script.innerHTML = '';
    script.src = url;
    script.async = false;
    script.defer = true;
    body.appendChild(script);
  }



}
