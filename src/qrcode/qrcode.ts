import { qrcode } from '../lib/qrcode';

export const img = function (text, size) {
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
export const table = function (text, size, typenumber) {
    let typeNumber = 4;
    if (typenumber) {
        typeNumber = typenumber;
    }
    let CorrectLevel = 'L';
    var tablere = totable(text, size);
    function totable(text, size) {
        var qr = qrcode(typeNumber, CorrectLevel);
        qr.addData(text);
        qr.make();
        var table = qr.createTableTag(size);
        return table;
    }
    return tablere;
}