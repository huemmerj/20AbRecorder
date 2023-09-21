

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.6d3bd9d6.js","_app/immutable/chunks/scheduler.a575993e.js","_app/immutable/chunks/index.acfe876f.js","_app/immutable/chunks/singletons.bb267cca.js"];
export const stylesheets = [];
export const fonts = [];
