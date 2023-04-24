import chalk from "chalk";
import OpenAI from "../openai.js";

const registerCompletionRoutes = (app) => {
	const apiKey = process.env.OPENAI_API_KEY;
	const openai = OpenAI.getInstance(apiKey);

	app.post("/completion", async (req, res) => {
		console.log(chalk.greenBright("This is a completion route"));

		try {
			const { model = "text-davinci-003", message = "" } = req.body;
			const { data } = await openai.createCompletion({
				model,
				prompt: message,
				max_tokens: 512,
			});
			res.json(data);
		} catch (error) {
			console.log("error: ", error);
			res.status(500).send("Internal server error");
		}
	});
};

export default registerCompletionRoutes;
