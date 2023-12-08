import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {Router} from "@angular/router";

@Component({
  selector: 'app-screen-lock',
  templateUrl: './screen-lock.page.html',
  styleUrls: ['./screen-lock.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ScreenLockPage implements OnInit {
  pin: string = '';
  digit1: string = '';
  digit2: string = '';
  digit3: string = '';
  digit4: string = '';

  loadingState: boolean = false;

  constructor(private router: Router) {
  }

  onClickPin() {
    this.loadingState = true;
    setTimeout(() => {
      this.loadingState = false;
      this.router.navigate(['/employee']);
    }, 3000);
  }

  constructPin() {
    this.pin = `${this.digit1}${this.digit2}${this.digit3}${this.digit4}`;
  }

  onDigitInput(event: any){
    let element;

    if (event.code !== 'Backspace')
      element = event.srcElement.nextElementSibling;

    if (event.code === 'Backspace')
      element = event.srcElement.previousElementSibling;

    this.constructPin();

    if(element == null)
      return;
    else
      element.focus();
  }

  ngOnInit() {
  }

}
