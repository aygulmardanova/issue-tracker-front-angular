import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {TaskListComponent} from './components/task-list/task-list.component';
import {TaskItemComponent} from './components/task-item/task-item.component';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {FormDataUploaderComponent} from './components/form-data-uploader/form-data-uploader.component';
import {ArrayBufferUploaderComponent} from './components/array-buffer-uploader/array-buffer-uploader.component';
import {FrontPageComponent} from './components/front-page/front-page.component';
import {DetailsPageComponent} from './components/details-page/details-page.component';
import {AppRoutingModule} from './app-routing.module';
import {DetailsChildComponent} from './components/details-child/details-child.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    TaskListComponent,
    TaskItemComponent,
    FormDataUploaderComponent,
    ArrayBufferUploaderComponent,
    FrontPageComponent,
    DetailsPageComponent,
    DetailsChildComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
