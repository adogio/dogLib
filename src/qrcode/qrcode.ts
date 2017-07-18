import { qrcode } from '../lib/qrcode';

export default function (text, size) {
    let typeNumber = 4;
    let CorrectLevel = 'L';
    var base64 = toBase64(text, size);
    var dataURL = 'data:image/gif;base64,' + base64;
    function toBase64(text, size) {
        var qr = qrcode(typeNumber, CorrectLevel);
        qr.addData(text);
        qr.make();
        var base64 = qr.createImgBase64(size);
        return base64;
    }
    return dataURL;
}