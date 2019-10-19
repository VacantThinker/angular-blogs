import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {IndexHeaderComponent} from './components/index-page/index-header/index-header.component';
import {IndexFooterComponent} from './components/index-page/index-footer/index-footer.component';
import {SectionLeftSideComponent} from './components/section-page/section-left-side/section-left-side.component';
import {SectionContentComponent} from './components/section-page/section-content/section-content.component';
import {SectionContainerDataService} from './services/section-container-data.service';
import {HttpClientModule} from '@angular/common/http';
import {SectionContainerComponent} from './components/section-page/section-container/section-container.component';
import {RouterModule, Routes} from '@angular/router';
import {IndexReplaceComponent} from './components/index-page/index-replace/index-replace.component';
import {HomeContainerComponent} from './components/home-page/home-container/home-container.component';
import {IndexPageNotFoundComponent} from './components/index-page/index-page-not-found/index-page-not-found.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

const appRoutes: Routes = [
  // {path: '', redirectTo: 'section', pathMatch: 'full'},
  {
    path: '',
    component: HomeContainerComponent,
    data: {
      animation: 'HomePage'
    }
  },

  {
    path: 'section',
    component: SectionContainerComponent,
    data: {
      animation: 'SectionPage'
    }
  },
  {
    path: 'section/:section',
    component: SectionContainerComponent,
    data: {animation: 'SectionLeftPage'}
  },
  {
    path: 'section/:section/:mdTitle',
    component: SectionContainerComponent,
    data: {animation: 'SectionContentPage'}
  },

  {path: '**', component: IndexPageNotFoundComponent},
];

@NgModule({
  declarations: [
    AppComponent,

    IndexHeaderComponent,
    IndexFooterComponent,
    IndexReplaceComponent,
    IndexPageNotFoundComponent,

    HomeContainerComponent,

    SectionLeftSideComponent,
    SectionContentComponent,
    SectionContainerComponent,

  ],
  imports: [
    // browser 默认浏览器
    BrowserModule,
    // browser animation 浏览器动画
    BrowserAnimationsModule,
    // httpclient HTTP请求
    HttpClientModule,
    // route 导航
    RouterModule.forRoot(appRoutes, {enableTracing: false}),

  ],
  providers: [
    SectionContainerDataService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
