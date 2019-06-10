import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DetailsPageComponent} from './components/details-page/details-page.component';
import {DetailsChildComponent} from './components/details-child/details-child.component';
import {TaskListComponent} from './components/task-list/task-list.component';

const routes: Routes = [
  {path: '', component: TaskListComponent},
  {
    path: 'details/:id', component: DetailsPageComponent
    // , children: [
    //   {path: ':id', component: DetailsChildComponent}
    // ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
