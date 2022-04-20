import { Component, OnInit } from '@angular/core';
import { CheminsService } from 'src/app/services/chemins.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(public chemins: CheminsService) { }

  ngOnInit(): void {
  }

}
