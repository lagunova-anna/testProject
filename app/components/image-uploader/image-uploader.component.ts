import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'image-uploader',
    templateUrl: './app/components/image-uploader/image-uploader.component.html',
    styleUrls: ['./app/components/image-uploader/image-uploader.component.css'],
})

export class ImageUploaderComponent {
    @Output() notifyLoadImage: EventEmitter = new EventEmitter();
    image:Object;
    isLoadProgress:boolean = false;

    handleDrop(e) {
        this.isLoadProgress = true;
        var file:File = e.dataTransfer.files[0];

        if(file.type === "image/png" || file.type === "image/jpeg") {
            var myReader:FileReader = new FileReader();
            var self = this;
            myReader.readAsDataURL(file);
            myReader.onload = (e) => {
                self.isLoadProgress = false;
                self.image = myReader.result;
                this.notifyLoadImage.emit(self.image);
            };
        }
        return false;
    }
}