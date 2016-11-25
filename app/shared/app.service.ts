import { Injectable } from '@angular/core';
import { InitService } from "./init.service";
import {Http} from '@angular/http';
import { Service } from './service.model';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Injectable()
export class AppService extends InitService  {
    private activeServiceId:number;

    constructor(private http: Http, private router:Router){
        super(http);
        this.loadData();
    }

    public getServices():Service[] {
        let servicesArr = JSON.parse(localStorage.getItem('services'));
        return  servicesArr;
    }

    public addService(service):void {
        let services = JSON.parse(localStorage.getItem('services'));
        let serviceId = services.length+1;
        service.id = serviceId;
        services.push(service);
        localStorage.setItem('services', JSON.stringify(services));
    }

    public getServiceById(id):Service {
       let servicesArr = JSON.parse(localStorage.getItem('services'));
       let service =  servicesArr.filter(service => service.id === id);
       return service[0];
    }

    public setActiveServiceId(serviceId):void {
        if (serviceId) {
            this.router.navigate(['details', serviceId]);
            this.activeServiceId = serviceId;
        } else {
            this.activeServiceId = null;
        }
    }

    public getActiveServiceId() {
        return this.activeServiceId;
    }

}