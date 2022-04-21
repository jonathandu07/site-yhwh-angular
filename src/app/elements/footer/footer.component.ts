import { Component, OnInit } from '@angular/core';
import { CheminsService } from 'src/app/services/chemins.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(public chemins: CheminsService) { }

  ngOnInit(): void {
  }

}
