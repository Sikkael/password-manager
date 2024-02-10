import createServer from "./utils/createServer";

console.log("Bonjour la planète !");

async function main (){

        const app = createServer();

    try {
        
         const url = await app.listen(4000,"0.0.0.0");
    }
    catch(e){
         console.error(e);
         
          
          process.exit(0);
         
    }
}

main();