import {Article} from "./article.type";

export interface Data {
  articles: Article[];
  status: string;
  totalResults: number;
}
