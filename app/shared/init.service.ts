import {Http} from '@angular/http';
import { Response} from '@angular/http';
import { Service } from './service.model';

export class InitService {

    constructor(private http: Http){ }

    protected loadData(){
        if (localStorage.getItem('services') == null || localStorage.getItem('services') == undefined) {
            this.http.get('./app/data/services.json').subscribe((data: Response) => {
                let servicesArr = data.json();
                let services = servicesArr.map(service => new Service(service));
                localStorage.setItem('services', JSON.stringify(services));
            });
        }
    }
}