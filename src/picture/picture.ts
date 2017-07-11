declare var Canvas: any;
export default class pictures {
    private file: any;
    public constructor(file: any) {
        this.file = file;
    }
    public shrink(quality: number, loaded: Function) {
        let file = this.file.files[0];
        let fileName = file.name;
        let fileType = file.type ||
            'image/' + fileName.substr(
                fileName.lastIndexOf('.') + 1);
        let fileReader = new FileReader();
        let image = new Image();
        fileReader.onload = function (e: any) {
            let dataURL = e.target.result;
            image.src = dataURL;
        }
        image.addEventListener('load', function () {
            let context;
            let canvas = document.createElement('canvas');
            context = canvas.getContext('2d');
            canvas.width = image.naturalWidth;
            canvas.height = image.naturalHeight;
            context.drawImage(image, 0, 0);
            let compressedImageDataURL = canvas.toDataURL(fileType, quality / 100);
            if (image.src.length > compressedImageDataURL.length) {
                loaded(compressedImageDataURL);
            } else {
                loaded(image.src);
            }
        })
        image.addEventListener('error', function () {
            console.log('image load error');
        })
        fileReader.readAsDataURL(file);
    }
}