// Boiling React - (c) 2021 Tassilo <tassia710@gmail.com>
// Licensed under the MIT License.

/**
 * Utility class for managing cookies.
 *
 * @since BoilingReact 1.0
 * @author Tassilo
 */
export class Cookies {

	/**
	 * Sets a cookie. The cookie will expire after 30 days.
	 *
	 * @param name the cookie name
	 * @param value the cookie value
	 */
	public Set(name: string, value: string): void {
		const d = new Date();
		d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));
		const expires = 'expires=' + d.toUTCString();
		document.cookie = name + '=' + value + ';' + expires + ';path=/';
	}



	/**
	 * Gets a cookie.
	 *
	 * @param name the cookie name
	 * @return the cookie value
	 */
	public Get(name: string): string | null {
		name = name + "=";
		const decodedCookie = decodeURIComponent(document.cookie);
		const ca = decodedCookie.split(';');
		for(let i = 0; i <ca.length; i++) {
			let c = ca[i];
			while (c.charAt(0) === ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) === 0) {
				return c.substring(name.length, c.length);
			}
		}
		return null;
	}

}
