export { default as GMapify } from "./Gmapify";

const pjson = require("../package.json");
console.log(
  ` >> 🗺🗺🗺 G-Mapify : Version: ${pjson.version}, Build: ${process.env.NODE_ENV} <<`
);
