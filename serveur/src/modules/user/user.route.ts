import { FastifyError, FastifyInstance, FastifyPluginOptions } from "fastify";
import { registerUserHandler } from "./user.controler";


function userRoutes(
    app: FastifyInstance, 
    _: FastifyPluginOptions,
    done: (err?: FastifyError) => void 
    
) {

    app.post("/", registerUserHandler)

    done();

}

export default userRoutes;