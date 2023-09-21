import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png"]),
	mimeTypes: {".png":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.ab99ecb8.js","app":"_app/immutable/entry/app.98d812cb.js","imports":["_app/immutable/entry/start.ab99ecb8.js","_app/immutable/chunks/scheduler.a575993e.js","_app/immutable/chunks/singletons.bb267cca.js","_app/immutable/entry/app.98d812cb.js","_app/immutable/chunks/scheduler.a575993e.js","_app/immutable/chunks/index.acfe876f.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/3.js'))
		],
		routes: [
			{
				id: "/game",
				pattern: /^\/game\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})());
