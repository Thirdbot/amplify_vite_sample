import type { Schema } from "../../data/resource";
type handleType = Schema['sayHello']['functionHandler'];

export const handler:handleType = async (event) => {
    const {name} = event.arguments
    return `Hello, ${name}!`
}