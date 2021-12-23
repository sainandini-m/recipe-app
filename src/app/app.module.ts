//dependencies modules
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

//components
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TilesComponent } from './tiles/tiles.component';
import { PostCreateComponent }  from './posts/post-create/post-create.component';
import {PostListComponent} from './posts/post-list/post-list.component'
import { PostSerivce } from './posts/post.service';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TilesComponent,
    PostCreateComponent,
    PostListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatExpansionModule
  ],
  providers: [PostSerivce],
  bootstrap: [AppComponent]
})
export class AppModule { }
