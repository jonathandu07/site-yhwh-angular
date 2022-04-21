import { Component, OnInit } from '@angular/core';
import { CheminsService } from 'src/app/services/chemins.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.css']
})
export class PresentationComponent implements OnInit {

  constructor(public chemins:CheminsService) { }

  ngOnInit(): void {
  }

}
