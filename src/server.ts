import express from "express";
import * as ice from "../public/server/index.mjs";

export async function bootstrap() {
  const app = express();

  const port = Number(process.env.PORT || "3000");

  app.use(async (req, res, next) => {
    //   if (req.path.match(/([0-9]+|umi)\.js/)) {
    // await new Promise(resolve => setTimeout(resolve, 1000));
    //   }
    next();
  });

  // Logger middleware
  app.use((req, res, next) => {
    console.info(`${req.method} ${req.url}`);
    next();
  });

  // Umi SSR middleware
  app.use(async (req, res, next) => {
    try {
      console.log("req.url", req.path);
      if (req.path.match(/(js|css)/)) {
        next();
        return;
      }
      console.log(req.url);
      const markup = await ice.renderToResponse({
        req,
        res,
      });
      // next()
    } catch (error) {
      next(error);
    }
  });

  // Umi static files (including SSG pages)
  app.use(express.static("public"));

  // Start server
  app.listen(port, () => {
    console.log(`Server is now running at http://127.0.0.1:${port}/`);
  });
}
bootstrap();
