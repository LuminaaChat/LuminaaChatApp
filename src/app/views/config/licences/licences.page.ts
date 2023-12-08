import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-licences',
  templateUrl: './licences.page.html',
  styleUrls: ['./licences.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class LicencesPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
