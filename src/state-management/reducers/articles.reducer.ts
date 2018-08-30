import {Article} from "../../types/article.type";
import {ArticlesActions} from "../actions/articles.actions";
import {ActionTypes} from "../action-types";

export function articlesReducer(state: Article[] = [], action: ArticlesActions): Article[] {
  if (ActionTypes.FETCH_ARTICLES === action.type) {
    return [...action.payload.articles];
  } else {
    return state;
  }
}
