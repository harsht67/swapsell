import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './features/login/components/login/login.component';
import { RegisterComponent } from './features/register/components/register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { MatInputModule } from '@angular/material/input';
import { UserDashBoardComponent } from './features/user-dash-board/user-dash-board.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTabsModule} from '@angular/material/tabs';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import {MatRadioModule} from '@angular/material/radio';
import { UpdateUserDataComponent } from './features/update-user-data/update-user-data.component';
import { MatSelectModule } from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';
import { HeaderComponent } from './features/header/header.component';
import { PostAnAdComponent } from './features/post-an-ad/post-an-ad.component';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { ProductResultComponent } from './features/product-result/product-result.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { FilterComponent } from './components/filter/filter.component';
import {MatSliderModule} from '@angular/material/slider';
import { ProductPageComponent } from './features/product-page/product-page.component';
import { HomeComponent } from './features/home/home.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { ReviewCardComponent } from './components/review-card/review-card.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    UserDashBoardComponent,
    UpdateUserDataComponent,
    PostAnAdComponent,
    ProductResultComponent,
    ProductCardComponent,
    FilterComponent,
    ProductPageComponent,
    HomeComponent,
    CategoryCardComponent,
    ReviewCardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatTabsModule,
    MatRadioModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatSelectModule,
    MatTooltipModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatSliderModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }