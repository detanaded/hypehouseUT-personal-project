import express from "express";
import path from "path";
import url from "url";

const app = express();

app.use(express.json());
const rootDir = url.fileURLToPath(new URL(".", import.meta.url));
app.use(express.static(path.join(rootDir, "public")));

app.get("/", (req, res) => {});

app.listen(3000, () => console.log("Server listening at port 3000"));
