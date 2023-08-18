import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


export function discountedPrice(originalPrice: number, discountPercentage: number) {
  var discountAmount = (discountPercentage / 100) * originalPrice;
  var discountedPrice = originalPrice - discountAmount;
  return discountedPrice
}