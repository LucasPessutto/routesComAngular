import { BookAuthorsComponent } from './book/book-authors/book-authors.component';
import { BookDetailComponent } from './book/book-detail/book-detail.component';
import { DvdFormComponent } from './dvd/dvd-form/dvd-form.component';
import { DvdDetailComponent } from './dvd/dvd-detail/dvd-detail.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BookComponent } from './book/book.component';
import { DvdComponent } from './dvd/dvd.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path:'dvds', component: DvdComponent },
  { path:'books', component: BookComponent, children: [{path: ':index', component: BookDetailComponent,
    children: [{path: 'authors', component: BookAuthorsComponent}]}] },
  { path: 'electronics', loadChildren: () => import('./electronics/electronics.module').then((m) => m.ElectronicsModule) },
  { path: 'dvds/new', component: DvdFormComponent },
  { path: 'dvds/:index', component: DvdDetailComponent },
  { path: '', pathMatch: 'full', redirectTo: 'dvds' },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
