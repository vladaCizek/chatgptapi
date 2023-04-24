import { createRouter, createWebHistory } from "vue-router";
import Home from "@pages/HomePage.vue";
import Completion from "@pages/CompletionPage.vue";
import Chat from "@pages/ChatPage.vue";
import PageNotFound from "@pages/PageNotFound.vue";

const routes = [
	{
		path: "/",
		name: "Home",
		component: Home,
	},
	{
		path: "/completion",
		name: "Completion",
		component: Completion,
	},
	{
		path: "/chat",
		name: "Chat",
		component: Chat,
	},
	{
		path: "/:catchAll(.*)",
		name: "PageNotFound",
		component: PageNotFound,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
