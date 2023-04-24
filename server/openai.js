import { Configuration, OpenAIApi } from "openai";

class OpenAI {
	static #instance;

	static getInstance(apiKey) {
		if (!OpenAI.#instance) {
			const configuration = new Configuration({
				apiKey: apiKey,
			});
			OpenAI.#instance = new OpenAIApi(configuration);
		}
		return OpenAI.#instance;
	}
}

export default OpenAI;
