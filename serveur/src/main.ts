import createServer from "./utils/createServer";
import logger from "./utils/logger";



async function main (){

        const app = createServer();

    try {
        
         const url = await app.listen(4000,"0.0.0.0");

         logger.info(`Server is ready at ${url}`);
    }
    catch(e){
         
         logger.error(e);
         process.exit(1);
         
          
         
         
    }
}

main();