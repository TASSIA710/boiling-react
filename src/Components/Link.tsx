// Website - (c) 2021 Tassilo <tassia710@gmail.com>
// Licensed under the MIT License.

import React, {Component, CSSProperties} from "react";
import {App} from "../index";

interface LinkProperties {
	href: string;
	reload: boolean;

	className: string;
	style: CSSProperties;
	newTab: boolean;
	title: string;
}

export class Link extends Component<LinkProperties> {

	public static defaultProps = {
		"reload": false,

		"className": "",
		style: {},
		newTab: false,
		title: "",
	};

	private static clickListener(props: LinkProperties, event: React.MouseEvent) {
		event.preventDefault();
		App.Redirect(props.href, props.reload, props.newTab).then().catch(console.error);
	}

	public render() {
		return <a href={this.props.href}
				  className={this.props.className}
				  style={this.props.style} title={this.props.title}
				  onClick={event => Link.clickListener(this.props, event)}>
			{this.props.children}
		</a>;
	}

}
