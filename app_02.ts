/**
 * A basic hello-world Angular 2 app
 */

import {
    NgModule,
    Component
} from '@angular/core';
import {
    BrowserModule
} from '@angular/platform-browser';
import {
    platformBrowserDynamic
} from '@angular/platform-browser-dynamic';
@Component({
    selector: 'reddit',
    template: `
<form class="ui  form segment">
     <h3 class="ui blue  ribbon label"><i Add></i>Add a Link</h3>
     <div class="field">
         <label for="title">Title:</label>
         <input name="title" #titleValue>
     </div>
     <div class="field">
         <label for="link">Link:</label>
         <input name="link" #linkValue>
     </div>

     <button (click)="addArticle(titleValue,linkValue)"
     class="ui  black right floated  button" >
     <i class="github icon"></i>Submit Link</button>

</form>
 `
})
class RedditApp {
    addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
        console.log(`Adding title:${title.value} and link:${link.value}`);
        return false;
    }
}


@Component({
    selector: 'reddit-article',
     host: {
     class: 'row'
    },
    template: `
        <div class="four wide column center aligned votes">
            <div class="ui statistic">
                <div class="value">
                    {{ votes }}
                </div>
                <div class="label">
                    Points
                </div>
            </div>
        </div>
        <div class="twelve wide column">
            <a class="ui large header" href="{{ link }}">
         {{ title }}
         </a>
            <ul class="ui big horizontal list voters">
                <li class="item">
                    <a href (click)="voteUp()">
                        <i class="arrow up icon"></i> upvote
                    </a>
                </li>
                <li class="item">
                    <a href (click)="voteDown()">
                        <i class="arrow down icon"></i> downvote
                    </a>
                </li>
            </ul>
        </div>
 `
})

class ArticleComponent {
    votes: number
    title: string;
    link: string;

    constructor() {
        this.title = 'Angular 2';
        this.link = 'http://angular.io';
        this.votes = 10;
    }

    voteUp() {
        this.votes += 1;
    }

    voteDown() {
        this.votes -= 1;
    }
}

@NgModule({
    declarations: [RedditApp],
    imports: [BrowserModule],
    bootstrap: [RedditApp],
})

class RedditAppModule {}

platformBrowserDynamic().bootstrapModule(RedditAppModule);