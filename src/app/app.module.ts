import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {IndexHeaderComponent} from './components/index-page/index-header/index-header.component';
import {IndexFooterComponent} from './components/index-page/index-footer/index-footer.component';
import {SectionLeftSideComponent} from './components/section-page/section-left-side/section-left-side.component';
import {SectionContentComponent} from './components/section-page/section-content/section-content.component';
import {MdArrayDataService} from './services/md-array-data.service';
import {HttpClientModule} from '@angular/common/http';
import {TransferDataService} from './services/transfer-data.service';
import {SectionContainerComponent} from './components/section-page/section-container/section-container.component';
import {Router, RouterModule, Routes} from '@angular/router';
import {IndexReplaceComponent} from './components/index-page/index-replace/index-replace.component';
import {HomeContainerComponent} from './components/home-page/home-container/home-container.component';
import {IndexPageNotFoundComponent} from './components/index-page/index-page-not-found/index-page-not-found.component';
import {FormsModule} from '@angular/forms';

const appRoutes: Routes = [
  {path: '', component: HomeContainerComponent},
  {path: 'section', component: SectionContainerComponent},
  {path: 'section/:section', component: SectionContainerComponent},
  {path: 'section/:section/:mdTitle', component: SectionContainerComponent},

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
    BrowserModule,
    HttpClientModule,

    RouterModule.forRoot(appRoutes, {enableTracing: false}),
    FormsModule

  ],
  providers: [
    MdArrayDataService,
    TransferDataService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
