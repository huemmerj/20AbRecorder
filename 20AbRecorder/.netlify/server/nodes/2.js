

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.d4b2f330.js","_app/immutable/chunks/scheduler.a575993e.js","_app/immutable/chunks/index.acfe876f.js"];
export const stylesheets = [];
export const fonts = [];
