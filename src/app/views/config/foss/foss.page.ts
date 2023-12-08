import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-foss',
  templateUrl: './foss.page.html',
  styleUrls: ['./foss.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class FossPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
