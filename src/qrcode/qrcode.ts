import { qrcode } from '../lib/qrcode';
export default class qrgen {
    private typeNumber;
    private CorrectLevel;
    public constructor() {
        this.typeNumber = 4;
        this.CorrectLevel = 'L';
    }

    public toBase64(text, size) {
        var qr = qrcode(this.typeNumber, this.CorrectLevel);
        qr.addData(text);
        qr.make();
        var base64 = qr.createImgBase64(size);
        return base64;
    }
    public toDataURL(text, size) {
        var base64 = this.toBase64(text, size);
        var dataURL = 'data:image/gif;base64,' + base64;
        return dataURL;
    }
}
