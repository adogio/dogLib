declare var require: any;
import importPicture from './picture/picture';
import {
    img, table
} from './qrcode/qrcode';
export const picture = importPicture;
export const qrcode = img;
export const qrtable = table;