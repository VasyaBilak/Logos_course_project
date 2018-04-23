import { Injectable } from "@angular/core";
import { Item } from "../models/item.model";

@Injectable()
export class ItemService {
    constructor(){}

    items: Item[]= [
        new Item("Title", "Desc", 300, "https://www.redrobin.com/content/dam/web/menu/tavern-menu/tavern-double-burger-1100.jpg"),
        new Item("Title", "Desc", 300, "https://www.redrobin.com/content/dam/web/menu/tavern-menu/tavern-double-burger-1100.jpg"),
        new Item("Title", "Desc", 300, "https://www.redrobin.com/content/dam/web/menu/tavern-menu/tavern-double-burger-1100.jpg")
    ]

    getAllItems(){
        return this.items;
    }
}