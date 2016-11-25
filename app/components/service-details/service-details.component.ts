import { Component, Input, OnInit } from '@angular/core';
import { AppService }  from '../../shared/app.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Service } from '../../shared/service.model';

@Component({
    selector: 'service-details',
    templateUrl: './app/components/service-details/service-details.component.html',
    styleUrls: ['./app/components/service-details/service-details.component.css'],
    providers: [AppService]
})

export class ServiceDetailsComponent implements OnInit{
    @Input() service: Service;

    constructor(private appService: AppService, private route: ActivatedRoute) {}

   ngOnInit() {
       this.route.params.forEach((params: Params) => {
           let id = +params['id'];
           this.service = this.appService.getServiceById(id);
       });
   }

}
