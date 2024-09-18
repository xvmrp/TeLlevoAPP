import { Component, OnInit , ViewChild} from '@angular/core';
// importa eso para que pueda ocupar
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();

// le importe swiper 
import Swiper from 'swiper';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.page.html',
  styleUrls: ['./sign-up.page.scss'],
})

// los campos que
export class SignUpPage {
  @ViewChild('swiper') swiper?: Swiper;
  email: string = '';
  password: string = '';

  nextSlide() {
    if (this.swiper) {
      this.swiper.slideNext();
    }
  }

  login() {
    // Implement your login logic here
    console.log('Logging in with:', this.email, this.password);
  }
}