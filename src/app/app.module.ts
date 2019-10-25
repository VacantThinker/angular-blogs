import {IndexReplaceComponent} from './components/index-page/index-replace/index-replace.component';
import {SectionLeftSideComponent} from './components/section-page/section-left-side/section-left-side.component';
import {RouterModule, Routes} from '@angular/router';
import {SectionMainNavComponent} from './components/section-page/section-main-nav/section-main-nav.component';
import {SectionMainContentComponent} from './components/section-page/section-main-content/section-main-content.component';
import {SectionContainerComponent} from './components/section-page/section-container/section-container.component';
import {SectionHttpDataService} from './services/section-http-data.service';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {HomeContainerComponent} from './components/home-page/home-container/home-container.component';
import {IndexHeaderComponent} from './components/index-page/index-header/index-header.component';
import {IndexPageNotFoundComponent} from './components/index-page/index-page-not-found/index-page-not-found.component';
import {IndexFooterComponent} from './components/index-page/index-footer/index-footer.component';
import {AppComponent} from './app.component';
import {IndexBlankComponent} from './components/index-page/index-blank/index-blank.component';
import {SectionSendDataService} from './services/section-send-data.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {MarkdownModule, MarkedOptions} from 'ngx-markdown';

const appRoutes: Routes = [
  {path: '', component: HomeContainerComponent, data: {animation: 'HomePage'}},

  {path: 'section', component: SectionContainerComponent, data: {animation: 'SectionPage'}},

  // {path: 'section/:section', component: SectionContainerComponent, data: {animation: 'SectionLeftPage'}},
  // {path: 'section/:section/:mdTitle', component: SectionContainerComponent, data: {animation: 'SectionContentPage'}},

  {path: '**', component: IndexPageNotFoundComponent},
];

// @ts-ignore
@NgModule({
  declarations: [
    AppComponent,

    IndexHeaderComponent,
    IndexFooterComponent,
    IndexReplaceComponent,
    IndexPageNotFoundComponent,

    HomeContainerComponent,

    SectionLeftSideComponent,
    SectionMainNavComponent,
    SectionContainerComponent,
    SectionMainContentComponent,
    IndexBlankComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes, {enableTracing: false}),
    FormsModule,

    MarkdownModule.forRoot({
        loader: HttpClient, markedOptions: {
          provide: MarkedOptions,
          useValue: {
            gfm: true,
            tables: true,
            breaks: false,
            pedantic: false,
            sanitize: false,
            smartLists: true,
            smartypants: false,
          },
        }
      }
    ),

  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
