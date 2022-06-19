export interface IPizza {
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
    }
}