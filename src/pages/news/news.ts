import {Component, OnInit} from '@angular/core';
import {NavController} from 'ionic-angular';
import {NewsProvider} from "../../providers/news/news";
import {Data} from "../../types/data.type";

@Component({
  selector: 'page-news',
  template: `
    <ion-header>
      <ion-navbar>
        <ion-title>
          <ion-item>
            <ion-icon ios="ios-open" md="md-open" (click)="editSearch()"></ion-icon>
            <ion-badge item-end>{{data.totalResults}}</ion-badge>
          </ion-item>
        </ion-title>
      </ion-navbar>
    </ion-header>

    <ion-content>
      <!-- TODO : implement radio group to choose country and category-->

      <ion-card *ngFor="let article of data.articles">
        <img [src]="article.urlToImage"/>
        <ion-card-content>
          <ion-card-title>
            {{article.title}}
          </ion-card-title>
          <p>
            {{article.description}}
          </p>
        </ion-card-content>
      </ion-card>
    </ion-content>
  `
})
export class NewsPage implements OnInit {

  data: Data[] = [];
  isEditForm: boolean = true;
  countries: string[] = ['USA', 'France', 'United Kingdom'];

  constructor(public navCtrl: NavController,
              private newsService: NewsProvider) {
  }

  ngOnInit(): void {
    this.newsService.fetchData('it', 'sport').subscribe(
      data => (this.data = data) && console.log(data)
    );
  }

  editSearch(): void {
    this.isEditForm = !this.isEditForm;
    console.log(this.isEditForm)
  }
}
