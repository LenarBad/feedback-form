import { Values } from './types';

export function validation({ product, date, impression, wasUsed }: Values): boolean {
    return !!(product && date && impression && wasUsed);
}
