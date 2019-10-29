import {ActionTypes} from "../action-types";
import {Article} from "../../types/article.type";

export class FetchArticlesAction {
  type = ActionTypes.FETCH_ARTICLES;
  payload: {
    articles: Article[]
  };

  constructor(articles: Article[]) {
    this.payload = { articles }
  }
}

export type ArticlesActions = FetchArticlesAction | null;
