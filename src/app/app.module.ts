import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {IndexHeaderComponent} from './components/index-page/index-header/index-header.component';
import {IndexFooterComponent} from './components/index-page/index-footer/index-footer.component';
import {SortLeftSideComponent} from './components/sort-page/sort-left-side/sort-left-side.component';
import {SortContentComponent} from './components/sort-page/sort-content/sort-content.component';
import {MdDataService} from './services/md-data.service';
import {HttpClientModule} from '@angular/common/http';
import {TransferDataService} from './services/transfer-data.service';
import {SortContainerComponent} from './components/sort-page/sort-container/sort-container.component';
import {RouterModule, Routes} from '@angular/router';
import {IndexReplaceComponent} from './components/index-page/index-replace/index-replace.component';
import {HomeContainerComponent} from './components/home-page/home-container/home-container.component';
import {IndexPageNotFoundComponent} from './components/index-page/index-page-not-found/index-page-not-found.component';

const appRoutes: Routes = [
  {path: '', component: HomeContainerComponent},
  {path: 'sort', component: SortContainerComponent},


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

    SortLeftSideComponent,
    SortContentComponent,
    SortContainerComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,

    RouterModule.forRoot(appRoutes, {enableTracing: false})

  ],
  providers: [
    MdDataService,
    TransferDataService,

  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
