import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
// import registerModelsRoutes from "./routes/modelRoutes.js";
import registerCompletionRoutes from "./routes/completionRoutes.js";
import registerChatRoutes from "./routes/chatRoutes.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 4000;

app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors()); // anything goes

// registerModelsRoutes(app);
registerCompletionRoutes(app);
registerChatRoutes(app);

app.listen(port, () => {
	console.log(`Server listening on port ${port}!`);
});
