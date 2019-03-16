import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MemberComponent} from './member/member.component';
import {SearchComponent} from './search/search.component';
import {AboutusComponent} from './aboutus/aboutus.component';
import {ToolComponent} from './tool/tool.component';

const routes: Routes = [
  {path: 'register', component: MemberComponent},
  {path: 'search', component: SearchComponent},
  { path: 'aboutus', component: AboutusComponent},
  { path: 'tools', component: ToolComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
