import { Component, OnInit } from '@angular/core';
import { CheminsService } from 'src/app/services/chemins.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {

  constructor(public cheminsService:CheminsService) { }

  ngOnInit(): void {
    this.cheminsService.NavFooter = false;
  }

}
