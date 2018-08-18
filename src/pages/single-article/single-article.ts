import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';

@Component({
  selector: 'page-single-article',
  template: `
    <ion-header>

      <ion-navbar>
        <ion-title>single-article</ion-title>
      </ion-navbar>

    </ion-header>


    <ion-content>
      <ion-card>
        <img src="img/nin-live.png"/>
        <ion-card-content>
          <ion-card-title>
            Nine Inch Nails Live
          </ion-card-title>
          <p>
            The most popular industrial group ever, and largely
            responsible for bringing the music to a mass audience.
          </p>
        </ion-card-content>
      </ion-card>
    </ion-content>

  `,
})
export class SingleArticlePage {

  constructor(public navCtrl: NavController) {
  }
}
