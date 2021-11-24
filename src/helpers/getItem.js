import { stock } from "../data/stock"

export const getItem = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve (stock)
        }, 2000)
    })
}
