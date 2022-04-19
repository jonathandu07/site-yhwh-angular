import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor() { }

  title = 'YHWH-Consortium';

  racine = '\src\assets\Logos-officiels\YHWH\SVG\SVG-Petit-Logo';

  ngOnInit(): void {
  }

}
