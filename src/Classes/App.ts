// Boiling React - (c) 2021 Tassilo <tassia710@gmail.com>
// Licensed under the MIT License.

import {Application, Cookies, Logger, Router} from "../index";

/**
 * Static utility class.
 *
 * @since BoilingReact 1.0
 * @author Tassilo
 */
export class App {

	private static application: Application;

	/**
	 * Static class.
	 * @private
	 */
	private constructor() {
	}



	public static Application(): Application {
		return App.application;
	}

	public static SetApplication(application: Application) {
		App.application = application;
	}



	public static Cookies(): Cookies {
		return App.Application().Cookies;
	}

	public static Logger(): Logger {
		return App.Application().Logger;
	}

	public static Router(): Router {
		return App.Application().Router;
	}



	/**
	 * Redirects to another part of the application.
	 *
	 * @param path the path to go to
	 * @param reload whether to actually refresh the website
	 * @param newTab whether to open the link in a new tab
	 */
	public static async Redirect(path: string, reload: boolean = false, newTab: boolean = false): Promise<void> {
		if (newTab) {
			window.open(path);
		} else {
			if (reload) {
				document.location.href = path;
			} else {
				window.history.pushState("", App.Application().Name, path);
				await App.Router().Route(path);
			}
		}
	}



	/**
	 * Waits for the given amount of milliseconds before invoking the resolving the promise.
	 *
	 * @param millis the amount of ms to wait
	 */
	public static async Wait(millis: number): Promise<void> {
		return new Promise((resolve => setTimeout(resolve, millis)));
	}



	/**
	 * Returns the currently appropriate greeting phrase (e.g. 'Good morning' or 'Good evening')
	 *
	 * @return the greeting phrase
	 */
	public static GreetingPhrase(): string {
		const hours = new Date().getHours();
		return "Good " + (hours > 18 ? "evening" : hours > 12 ? "afternoon" : hours > 6 ? "morning" : "evening");
	}

	/**
	 * Returns a string version of the input number that contains thousand separators.
	 *
	 * @param num the input number
	 * @return thousand-separated string
	 */
	public static Comma(num: number): string {
		return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}



	/**
	 * Toggles the presence of a class on the given element.
	 *
	 * @param element the element
	 * @param className the class to toggle
	 */
	public static ToggleClass(element: string | HTMLElement, className: string) {
		const x = (typeof element === "string") ? document.getElementById(element) : element;
		if (x == null) return;
		if (x.classList.contains(className)) {
			x.classList.remove(className);
		} else {
			x.classList.add(className);
		}
	}

}
