export const completionSettings = {
	model: "text-davinci-002",
	suffix: null,
	max_tokens: 16,
	temperature: 1,
	top_p: 1,
	n: 1,
	presence_penalty: 0,
	frequency_penalty: 0,
	best_of: 1,
	logit_bias: null,
};

export const completionModels = [
	{ label: "Davinci", value: "text-davinci-003" },
	{ label: "Davinci (lower cost)", value: "text-davinci-002" },
	{ label: "Curie", value: "text-curie-001" },
	{ label: "Babbage", value: "text-babbage-001" },
	{ label: "Ada", value: "text-ada-001" },
];
