import { Values } from './types';

export function validation({ product, date, rating, wasUsed }: Values): boolean {
    return !!(product && date && rating && wasUsed);
}
