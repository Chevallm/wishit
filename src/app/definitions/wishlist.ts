import { Wish } from "./wish";

export type Wishlist = {
    title: string;
    wishs: Wish[];
    owner: string;
}