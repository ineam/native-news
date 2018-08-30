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
      <div class="edit" *ngIf="isEditForm">
        <button ion-button block outline (click)="changeEditView()">
          Country / Category
        </button>
        <button ion-button block outline (click)="applyNewEdit()">
          Apply
        </button>
        <ion-list *ngIf="isCountryEdit" radio-group [(ngModel)]="countryChoice">
          <ion-item *ngFor="let country of countries">
            <ion-label>{{country}}</ion-label>
            <ion-radio [value]="country"></ion-radio>
          </ion-item>
        </ion-list>
        <ion-list *ngIf="isCategoryEdit" radio-group [(ngModel)]="categoryChoice">
          <ion-item *ngFor="let category of categories">
            <ion-label>{{category}}</ion-label>
            <ion-radio [value]="category"></ion-radio>
          </ion-item>
        </ion-list>
      </div>

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
  isEditForm: boolean = false;
  isCountryEdit: boolean = true;
  isCategoryEdit: boolean = false;
  countries: string[] = ['USA', 'France', 'United Kingdom'];
  categories: string[] = ['Sport', 'Business', 'Technology'];
  countryChoice: string = this.countries[1];
  categoryChoice: string = this.categories[0];

  constructor(public navCtrl: NavController,
              private newsService: NewsProvider) {
  }

  ngOnInit(): void {
    this.newsService.fetchData('fr', 'sport').subscribe(
      data => this.data = data
    );
  }

  editSearch(): void {
    this.isEditForm = !this.isEditForm;
  }

  changeEditView(): void {
    this.isCategoryEdit = !this.isCategoryEdit;
    this.isCountryEdit = !this.isCountryEdit;
  }

  applyNewEdit(): void {
    let country: string;
    let category = this.categoryChoice.toLowerCase();
    switch (this.countryChoice) {
      case this.countries[0]:
        country = 'us';
        break;
      case this.countries[1]:
        country = 'fr';
        break;
      case this.countries[2]:
        country = 'gb';
        break;
      default:
        country = 'us';
    }

    this.newsService.fetchData(country, category).subscribe(
      data => this.data = data
    );

    this.isEditForm = false;
  }
}
