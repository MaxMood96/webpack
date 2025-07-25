"use strict";

const { ModuleFederationPlugin } = require("../../../../").container;
const { dependencies } = require("./package.json");

/** @type {import("../../../../").Configuration} */
module.exports = {
	optimization: {
		chunkIds: "named",
		moduleIds: "named"
	},
	plugins: [
		new ModuleFederationPlugin({
			name: "container",
			filename: "container.js",
			library: { type: "commonjs-module" },
			exposes: {
				"./emitter": {
					name: "emitter",
					import: "./emitter.js"
				}
			},
			shared: {
				...dependencies
			}
		})
	]
};
