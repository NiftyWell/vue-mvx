// @ts-ignore
import qrcodeOptions from './qrcode-style';
import QRCodeStyling from 'qr-code-styling';
import type { IQRCodeHandler } from "vue-erdjs";
import elrondLogo from '../assets/elrond-logo.png';

qrcodeOptions.image = elrondLogo

class CustomQRCodeHandler implements IQRCodeHandler {
    private qrcode = new QRCodeStyling(Object.assign(qrcodeOptions));

    handle(data: string, element: HTMLElement): Promise<any> {
        console.log("Handle", data, element)
        qrcodeOptions.data = data;
        this.qrcode.update(Object.assign(qrcodeOptions));
        this.qrcode.append(element);
        return Promise.resolve(undefined);
    }

}

export default CustomQRCodeHandler;
