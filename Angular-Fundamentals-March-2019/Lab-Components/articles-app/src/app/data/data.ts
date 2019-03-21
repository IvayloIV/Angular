import { Article } from '../models/article.model';
import { data } from '../data/seed';

export class ArticleData {
    getData(): Article[] {
        let articles: Article[] = [];

        for (let i = 0; i < data.length; i++) {
            const article = data[i];
            articles.push(new Article(article.title, article.description, article.author, article.imageUrl));
        }

        return articles;
    }
}
