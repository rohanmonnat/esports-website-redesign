import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

export const promisify =
  <T>(fn: Function, timeout: number = 0) =>
  (...args: any[]) =>
    new Promise<T>((resolve, reject) => {
      setTimeout(() => {
        try {
          const result = fn(...args);
          resolve(result);
        } catch (e) {
          reject(e);
        }
      }, timeout);
    });

export const capitalize = (value: string): string => {
  if (value === '') return '';

  return value[0].toUpperCase() + value.slice(1).toLowerCase();
};
