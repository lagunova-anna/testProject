import { Component } from '@angular/core';
import { AppService }  from '../../shared/app.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Service } from '../../shared/service.model';
import { SliderComponent } from './../slider/slider.component';
import {filterPricePipe} from '../../shared/app.filters';
import {searchPipe} from '../../shared/app.filters';

@Component({
    selector: 'services-list',
    templateUrl: './app/components/services-list/services-list.component.html',
    styleUrls: ['./app/components/services-list/services-list.component.css'],
    directives: [SliderComponent],
    providers: [AppService],
    pipes: [ filterPricePipe, searchPipe]
})

export class ServicesListComponent {

    priceValues:number[];

    constructor(private appService:AppService, private router:Router) { }

    get services():Service[] {
        return this.appService.getServices();
    }

    get activeServiceId() {
        return this.appService.getActiveServiceId();
    }

    private showDetails(service:Service):void {
        this.appService.setActiveServiceId(service.id);
    }

    private openForm():void {
        this.appService.setActiveServiceId(null);
        this.router.navigate(['add/']);
    }

    onNotify(sliderValues:number[]):void {
        this.priceValues = sliderValues;
    }
}
