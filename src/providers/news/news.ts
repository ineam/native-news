import {HttpClient} from '@angular/common/http';
import {Injectable} from '@angular/core';

const API_KEY = '3076311881e04b34a31cef6be30f7813';
const API_URL = 'https://newsapi.org/v2/top-headlines?';

@Injectable()
export class NewsProvider {

  constructor(public http: HttpClient) {
  }

  fetchData(country: string, category: string): any {
    return this.http.get(`${API_URL}country=${country}&category=${category}&apiKey=${API_KEY}`);
    // return this.http.get('https://newsapi.org/v2/top-headlines?country=sa&category=business&apiKey=3076311881e04b34a31cef6be30f7813');
  }
}
