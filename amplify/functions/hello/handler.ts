import type { Schema } from "../../data/resource";
type handleType = Schema['sayHello']['functionHandler'];
import {env} from "$amplify/env/sayhello";

export const handler:handleType = async (event) => {
    const REGION = env.AWS_REGION;

    const {name} = event.arguments
    return `Hello, ${name},region:${REGION}!`
}