import express from "express";
import { createRequire } from "module";
import path from 'path'
import url from "url";

const require = createRequire(import.meta.url);

export async function bootstrap() {
  const app = express();

  const __dirname = path.dirname(url.fileURLToPath(import.meta.url));
  console.log('__dirname', __dirname)

  let ice
  try {
    ice = await import(path.join(__dirname, "../public/server/index.mjs"));
  } catch (error) {
    ice = require(path.join('/vercel/output/server/index.mjs'));
  }

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
      console.log(markup)
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
