import chalk from "chalk";
import OpenAI from "../openai.js";

const registerChatRoutes = (app) => {
	const apiKey = process.env.OPENAI_API_KEY;
	const openai = OpenAI.getInstance(apiKey);

	app.post("/chat", async (req, res) => {
		try {
			console.log(chalk.blueBright(req.body.model));
			console.log(
				chalk.greenBright(`Request body: ${JSON.stringify(req.body, null, 2)}`),
			);

			const { model = "gpt-3.5-turbo", messages = [] } = req.body;
			const { role = "user", content } = messages[0];

			const { data } = await openai.createChatCompletion({
				model,
				messages: [{ role, content }],
			});
			res.json({ data });
		} catch (error) {
			console.error(error);
			res.status(500).send("Internal server error");
		}
	});
};

export default registerChatRoutes;
