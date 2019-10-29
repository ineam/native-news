import {Injectable} from "@angular/core";
import {Store} from "@ngrx/store";
import {ApplicationState} from "../state-management/application-state";
import {FetchArticlesAction} from "../state-management/actions/articles.actions";


@Injectable()
export class AppSandbox {

  articles$ = this.store.select(state => state.articles);


  constructor(private store: Store<ApplicationState>) {}

  fetchArticles(articles): void {
    this.store.dispatch(new FetchArticlesAction(articles))
  }
}
