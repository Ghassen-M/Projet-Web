import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-barre-recherche',
  templateUrl: './barre-recherche.component.html',
  styleUrls: ['./barre-recherche.component.scss']
})
export class BarreRechercheComponent implements OnInit {
  resultats: any[] = [];
  constructor(private api: ApiService) { }
  med="";
  submitted=false;
  ngOnInit(): void {
  }
  submit(): void {
    this.submitted=!this.submitted;
    this.api.getMeds(this.med).subscribe((data: any[]) => { this.med;this.resultats = data });
  }

}
