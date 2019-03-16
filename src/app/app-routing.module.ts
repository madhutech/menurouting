import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MemberComponent} from './member/member.component';
import {SearchComponent} from './search/search.component';
import {AboutusComponent} from './aboutus/aboutus.component';

const routes: Routes = [
  {path: 'addmember', component: MemberComponent},
  {path: 'search', component: SearchComponent},
  { path: 'aboutus', component: AboutusComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
