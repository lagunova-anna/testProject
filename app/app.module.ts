import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule }   from '@angular/router';
import { FormsModule } from "@angular/forms";
import { HttpModule }    from '@angular/http';

import { AppComponent }   from './app.component';
import { ServicesListComponent } from './components/services-list/services-list.component';
import { ServiceDetailsComponent } from './components/service-details/service-details.component';
import { ServiceFormComponent } from './components/service-form/service-form.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SliderComponent } from './components/slider/slider.component';
import { ImageUploaderComponent } from './components/image-uploader/image-uploader.component';
import {filterPricePipe} from './shared/app.filters';
import {searchPipe} from './shared/app.filters';
import { ContactsAppRoutes } from './app.routes';

@NgModule({
    imports: [ BrowserModule, HttpModule, RouterModule.forRoot(ContactsAppRoutes), FormsModule ],
    declarations: [ AppComponent,
        ServicesListComponent,
        ServiceDetailsComponent,
        ServiceFormComponent,
        HomePageComponent,
        SliderComponent,
        ImageUploaderComponent,
        filterPricePipe,
        searchPipe],
    bootstrap: [ AppComponent ]
})

export class AppModule { }