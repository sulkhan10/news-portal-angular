import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsListComponent } from './components/news-list/news-list.component';
import { HomeComponent } from './pages/home/home.component';
export const routes: Routes = [
  { path: 'news', component: NewsListComponent },
  { path: '', component: HomeComponent },
  // { path: '', redirectTo: '/news', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
