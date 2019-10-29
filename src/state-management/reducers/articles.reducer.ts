import {Article} from "../../types/article.type";
import {ArticlesActions} from "../actions/articles.actions";
import {ActionTypes} from "../action-types";

export function articlesReducer(state: Article[] = [], action: ArticlesActions): Article[] {
  switch (action.type) {
    case ActionTypes.FETCH_ARTICLES:
      return [...action.payload.articles];
    default:
      return state;
  }
}
