import { Component } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.css']
})
export class ImgComponent {
  urlImg: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Naruto_logo.svg/1200px-Naruto_logo.svg.png'

  setImgOne(): void {
    this.urlImg = 'https://i.pinimg.com/originals/74/45/6c/74456c2bd47666329b9dee5dcad4ece7.png'
  }

  setImgTwo(): void {
    this.urlImg = 'https://fortnite-api.com/images/cosmetics/br/cid_a_261_athena_commando_m_headband/featured.png'
  }
}
