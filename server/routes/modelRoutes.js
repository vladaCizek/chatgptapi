import axiosInstance from "../axiosInstance.js";

const registerModelsRoutes = (app) => {
	// GET /openai/models
	app.get("/openai/models", async (req, res) => {
		try {
			const response = await axiosInstance.get("/models");
			res.json(response.data.data);
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: "Internal server error" });
		}
	});

	app.get("/openai/:model", async (req, res) => {
		try {
			const response = await axiosInstance.get(`/models/${req.params.model}`);
			res.json(response.data);
		} catch (error) {
			console.error(error);
			res.status(500).json({ error: "Internal server error" });
		}
	});
};

export default registerModelsRoutes;
