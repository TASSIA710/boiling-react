// Boiling React - (c) 2021 Tassilo <tassia710@gmail.com>
// Licensed under the MIT License.

/**
 * This class is used to log information.
 *
 * @since BoilingReact 1.0
 * @author Tassilo
 */
export class Logger {

	/**
	 * Logs a message on the `INFO` level.
	 *
	 * @param message the message
	 */
	public Info(message: string) {
		console.log("%c [INFO] " + message, "color: #dfdfdf;");
	}

	/**
	 * Logs a message on the `DEBUG` level.
	 *
	 * @param message the message
	 */
	public Debug(message: string) {
		console.log("%c[DEBUG] " + message, "color: #afafaf;");
	}

	/**
	 * Logs a message on the `WARNING` level.
	 *
	 * @param message the message
	 */
	public Warn(message: string) {
		console.log("%c [WARN] " + message, "color: gold;");
	}

	/**
	 * Logs a message on the `ERROR` level.
	 *
	 * @param message the message
	 */
	public Error(message: string) {
		console.log("%c[ERROR] " + message, "color: #ff3f00;");
	}

	/**
	 * Logs a message on the `SEVERE` level.
	 *
	 * @param message the message
	 */
	public Severe(message: string) {
		console.log("%c[ERROR] " + message, "color: #ffff00; background: #ff0000;");
	}

}
