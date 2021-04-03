// Boiling React - (c) 2021 Tassilo <tassia710@gmail.com>
// Licensed under the MIT License.

import {App} from "./index";

/**
 * Completely initializes the application in an async manner.
 * Your `index.js` should look like the following:
 *
 * ```typescript
 * // Imports
 * import YourApplication from ...;
 * import {App, Initialize} from ...;
 *
 * // Set YourApplication as application
 * App.SetApplication(new YourApplication());
 * Initialize().then().catch(console.error);
 * ```
 */
export async function Initialize(): Promise<void> {

	// Initialize core
	App.Logger().Info("Initializing...");
	await App.Application().Initialize();

	// Register routes
	App.Logger().Info("Registering Routes...");
	for (const route of App.Application().LoadRoutes()) {
		App.Logger().Debug("- " + route.Title);
		App.Router().RegisterRoute(route);
	}

	// Launch
	App.Logger().Info("Launching...");
	await App.Redirect(document.location.pathname);

	// Done!
	App.Logger().Info("Done! Running " + App.Application().Name + " v" + App.Application().Version);

}
