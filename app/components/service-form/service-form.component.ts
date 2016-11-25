import { Component } from '@angular/core';
import { AppService }  from '../../shared/app.service';
import { ImageUploaderComponent } from './../image-uploader/image-uploader.component';
import { Router, ActivatedRoute } from '@angular/router';
import { Service } from '../../shared/service.model';

@Component({
    selector: 'service-form',
    templateUrl: './app/components/service-form/service-form.component.html',
    styleUrls: ['./app/components/service-form/service-form.component.css'],
    directives: [ImageUploaderComponent],
    providers: [AppService]
})

export class ServiceFormComponent {
    service:Service = new Service({});

    constructor(private appService:AppService, private router:Router, private r:ActivatedRoute) { }

    private addService():void {
        this.appService.addService(this.service);
        this.appService.setActiveServiceId(null);
        this.router.navigateByUrl('');
    }

    private notifyLoadImage(image:string):void {
        this.service.imgSRC = image;
    }
}