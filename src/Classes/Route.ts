// Boiling React - (c) 2021 Tassilo <tassia710@gmail.com>
// Licensed under the MIT License.

/**
 * This class is the superclass of all routes.
 *
 * @since BoilingReact 1.0
 * @author Tassilo
 */
export abstract class Route {

	/**
	 * Represents the title of this route (used for debugging).
	 */
	public readonly Title: string;

	/**
	 * Represents the path (as a regular expression) to which this route applies.
	 */
	public readonly Path: string | RegExp;



	/**
	 * Creates a new route with the given meta information.
	 *
	 * @param title the tile of the route
	 * @param path the path of the route
	 */
	protected constructor(title: string, path: string | RegExp) {
		this.Title = title;
		this.Path = path;
	}

	/**
	 * Processes this route.
	 *
	 * @param matches the match result, useful if groups have been defined in the pathRegex
	 */
	public async Process(matches: RegExpMatchArray): Promise<void> {
		throw new Error("Route '" + this.Title + "' has not implemented the 'Process' function.");
	}

}
