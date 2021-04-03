// Boiling React - (c) 2021 Tassilo <tassia710@gmail.com>
// Licensed under the MIT License.

import {Logger, Route, Router} from "../index";

/**
 * Defines an application on an abstract level.
 *
 * @since BoilingReact 1.0
 * @author Tassilo
 */
export abstract class Application {

	/**
	 * The {@link Logger} of this application.
	 */
	public readonly Logger: Logger = new Logger();

	/**
	 * The {@link Router} of this application.
	 */
	public readonly Router: Router = new Router();

	/**
	 * The name of this application.
	 */
	public readonly Name: String;

	/**
	 * The version of this application.
	 */
	public readonly Version: String;



	protected constructor(name: String, version: String) {
		this.Name = name;
		this.Version = version;
	}



	/**
	 * Invoked when the application is about to be initialized.
	 */
	public async Initialize(): Promise<void> {
		// Do nothing
	}



	/**
	 * Returns an array of all routes of this application.
	 *
	 * @return the routes
	 */
	public abstract LoadRoutes(): Route[]

}
