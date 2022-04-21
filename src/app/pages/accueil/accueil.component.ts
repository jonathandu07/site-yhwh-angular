import { Component, OnInit } from '@angular/core';
import { CheminsService } from 'src/app/services/chemins.service';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {

  constructor(public chemins:CheminsService) { }

  title = 'YHWH-Consortium';

  racine = '/src/assets/Logos-officiels/YHWH/SVG/SVG-Petit-Logo';

  ngOnInit(): void {
  }

}
