import { Values } from './types';

export function validation({ product, datePurchase, rating, wasUsed }: Values): boolean {
    return !!(product && datePurchase && rating && wasUsed);
}
