import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { ur } from "zod/v4/locales/index.js";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
export const menuList = [
  {
    url: "/products", name: "Product",
  },
  {
    url: "/about", name: "About",
  },
  {
    url: "/contact", name: "Contact",
  },
  {
    url: "/policy", name: "Policy",
  },
];
