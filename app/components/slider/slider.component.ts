import { Component, OnInit, ElementRef, Output, EventEmitter } from '@angular/core';

declare var jQuery: any;

@Component({
    selector: 'filter-slider',
    templateUrl: './app/components/slider/slider.component.html',
    styleUrls: ['./app/components/slider/slider.component.css']
})

export class SliderComponent implements OnInit {

    @Output() notify: EventEmitter = new EventEmitter();

    private minPrice: number = 0;
    private maxPrice: number = 500;

    slideValues: number[] = [this.minPrice, this.maxPrice];

    constructor(private elementRef:ElementRef) {}

    ngOnInit() {
        jQuery(this.elementRef.nativeElement).find("#slider").slider({
            range: true,
            orientation: "horizontal",
            min: this.minPrice,
            max: this.maxPrice,
            values: [this.minPrice, this.maxPrice],
            slide: (event, ui) => {
                this.slideValues = ui.values;
                this.notify.emit(this.slideValues);
            }
        })
    };
}

