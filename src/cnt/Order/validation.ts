import {Values} from './types';

export function validation({first, last, orderNumber, email, street, city, zipCode, usaState, consentToSpecialOffer}: Values): boolean {
    return !!(first && last && orderNumber && email && street && city && zipCode && usaState && consentToSpecialOffer);
}
