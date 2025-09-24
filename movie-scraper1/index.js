import welcome from "welcome.html";
import movies from "movies.html";
import getMovieData from 'getMovieData.js'

/**
 * @typedef {Object} Env
 */

export default {

	

	/**
	 * @param {Request} request
	 * @param {Env} env
	 * @param {ExecutionContext} ctx
	 * @returns {Promise<Response>}
	 */
	async fetch(request, env, ctx) {
		const url = new URL(request.url);
		console.log(`Hello ${navigator.userAgent} at path ${url.pathname}!`);
		const movieScrapeUrls = [''];

		if (url.pathname === "/api") {
			// You could also call a third party API here
			const data = await import("./data.js");
			return Response.json(data);
		}
		if (url.pathname === "/getMovieData") {
			const movieName = url.searchParams.get("movie");
			const data = await getMovieData(movieName);
			return Response.json(data);
		}

		return new Response(welcome, {
			headers: {
				"content-type": "text/html",
			},
		});
	},
};
