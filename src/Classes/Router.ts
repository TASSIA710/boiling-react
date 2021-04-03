// Boiling React - (c) 2021 Tassilo <tassia710@gmail.com>
// Licensed under the MIT License.

import {App, Route} from "../index";

/**
 * The router is responsible for routing UI requests to their corresponding routes.
 *
 * @since BoilingReact 1.0
 * @author Tassilo
 */
export class Router {

	private readonly routes: Route[] = [];

	/**
	 * Registers a new route.
	 *
	 * @param route the route to register
	 */
	public RegisterRoute(route: Route) {
		this.routes[this.routes.length] = route;
	}



	/**
	 * Calls the 'Process' function of the route, where the `path` matches first.
	 * Will show the `404 Not Found` page if no route matches.
	 *
	 * @param path the path
	 */
	public async Route(path: string): Promise<void> {
		App.Logger().Debug("Routing to '" + path + "'...");
		for (const route of this.routes) {
			// Check route
			const match = path.match(route.Path);
			if (match === null || match[0] !== match.input) continue;

			// Process
			App.Logger().Debug("Processing route '" + route.Title + "'...");
			await route.Process(match);
			App.Logger().Info("Routed to '" + route.Title + "'.");
			return;
		}

		App.Logger().Warn("No route for '" + path + "' found.");
		// TODO: Show 404 page
	}

}
