

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/game/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.e29e287e.js","_app/immutable/chunks/scheduler.a575993e.js","_app/immutable/chunks/index.acfe876f.js"];
export const stylesheets = [];
export const fonts = [];
