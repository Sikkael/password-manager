import { FastifyError, FastifyInstance, FastifyPluginOptions } from "fastify";
import { updateVaultHandler } from "./vault.controler";

function vaultRoutes(
  app: FastifyInstance,
  _: FastifyPluginOptions,
  done: (err?: FastifyError) => void
) {
  app.put(
    "/",
    {
      onRequest: [],
    },
    updateVaultHandler
  );

  done();
}

export default vaultRoutes;