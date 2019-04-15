import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SessionItemComponent } from './session-item/session-item.component';
import { SessionItemListComponent } from './session-item-list/session-item-list.component';
import { InscriptionDisabledDirective } from './inscription-disabled.directive';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import {RouterModule, Routes} from '@angular/router';
import {FakeSessionItemService} from './admin/fake-session-item.service';
import {HttpClientModule} from '@angular/common/http';
import { SessionHttpService } from '/home/specialjcg/mabase/angular/lab55/src/app/session-http-service.service';
const appRoutes: Routes = [
  {
    path: 'list',
    component: SessionItemListComponent},
  {
    path: 'admin',
    loadChildren: './admin/admin.module#AdminModule'
  },
   { path: '',   redirectTo: '/list', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SessionItemComponent,
    SessionItemListComponent,
    InscriptionDisabledDirective,
    PageNotFoundComponent
  ],
  imports: [RouterModule.forRoot(
    appRoutes,
    { enableTracing: true }
  ),
    BrowserModule,
    HttpClientModule
  ],
  providers: [FakeSessionItemService, SessionHttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
