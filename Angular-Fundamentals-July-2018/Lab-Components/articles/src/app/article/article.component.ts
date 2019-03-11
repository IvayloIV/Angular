import { Component, OnInit, Input } from '@angular/core';
import { Article } from '../models/article.model';

@Component({
	selector: 'app-article',
	templateUrl: './article.component.html',
	styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
	private symbols: number = 250;
	@Input() article: Article;
	@Input() articleDesc: string;
	descToShow: string;
	articleDescLen: number;
	showReadMoreBtn: boolean = true;
	showHideBtn: boolean = false;
	imageIsShown: boolean = false;
	imageButtonTitle: string = 'Show Image';

	constructor() {
		this.articleDescLen = 0;
		this.descToShow = '';
	}
	
	ngOnInit() {}
	
	readMore() {
		this.articleDescLen += this.symbols;
		this.descToShow = this.articleDesc.substring(0, this.articleDescLen);
		if (this.articleDescLen >= this.articleDesc.length) {
			this.showReadMoreBtn = false;
			this.showHideBtn = true;
		}
	}
	
	hideDesc() {
		this.articleDescLen = 0;
		this.descToShow = '';
		this.showReadMoreBtn = true;
		this.showHideBtn = false;
	}
	
	toggleImage() {
		this.imageIsShown = !this.imageIsShown;
		if (this.imageIsShown) {
			this.imageButtonTitle = 'Hide Image';
		} else {
			this.imageButtonTitle = 'Show Image';
		}
	}
}
