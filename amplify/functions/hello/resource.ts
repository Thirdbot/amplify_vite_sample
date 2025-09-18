import { defineFunction } from "@aws-amplify/backend";


export const sayHello = defineFunction({
    name:'sayhello',
    entry:'./handler.ts',
    bundling:{
        minify:false
    },
    environment:{

    }
})