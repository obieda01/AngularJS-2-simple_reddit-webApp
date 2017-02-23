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
     <i class="github icon"></i>submit</button>

</form>
 `
})
class RedditApp {
    addArticle(title:HTMLInputElement,link:HTMLInputElement)
    :boolean{
        console.log(`Adding title:${title.value} and link:${link.value}`);
    return false;}
}

@NgModule({
    declarations: [RedditApp],
    imports: [BrowserModule],
    bootstrap: [RedditApp],
})

class RedditAppModule {}

platformBrowserDynamic().bootstrapModule(RedditAppModule);


// @Component({
//     selector: 'hello-world',
//     template: `
// <ul>
//  <li *ngFor="let foober of names">Hello {{ foober }}</li>
//  </ul>    
//  `
// })
// class HelloWorld {
//     names: string[];
//     constructor() {
//     this.names=['Ari', 'Carlos', 'Felipe','Ahmad'];        
//     }

// }
// @NgModule({
//     declarations: [HelloWorld],
//     imports: [BrowserModule],
//     bootstrap: [HelloWorld],
// })
// class HelloWorldAppModule {}

// platformBrowserDynamic().bootstrapModule(HelloWorldAppModule);