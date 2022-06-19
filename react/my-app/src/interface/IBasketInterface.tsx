export interface IBasketInterface {
    "id": number,
    "name": string,
    "description": string,
    "image": string,
    "weight": {
        "small": number,
        "big": number
    },
    "price": {
        "small": number,
        "big": number
    },
   "options": {
        "isBigSize": boolean,
       "isAddIngr": ""|"cheese"|"sesame"|"meat",
       "amount"?: number
   }
}
