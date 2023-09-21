import { c as create_ssr_component, d as createEventDispatcher, f as each, h as add_attribute, e as escape, v as validate_component } from "../../../chunks/ssr.js";
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { started = false } = $$props;
  createEventDispatcher();
  if ($$props.started === void 0 && $$bindings.started && started !== void 0)
    $$bindings.started(started);
  return `<th>${`${!started ? `<button data-svelte-h="svelte-1b2ys44">+</button>` : ``}`}</th>`;
});
const StitchSelect = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { stiches = 0 } = $$props;
  let { leftStiches = 5 } = $$props;
  if ($$props.stiches === void 0 && $$bindings.stiches && stiches !== void 0)
    $$bindings.stiches(stiches);
  if ($$props.leftStiches === void 0 && $$bindings.leftStiches && leftStiches !== void 0)
    $$bindings.leftStiches(leftStiches);
  return `<select name="stiches">${each(Array(leftStiches + stiches + 1), (_, i) => {
    return `<option${add_attribute("value", i, 0)}>${escape(i)}</option>`;
  })}</select>`;
});
const TrumpSelect = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  createEventDispatcher();
  let { trump = 0 } = $$props;
  if ($$props.trump === void 0 && $$bindings.trump && trump !== void 0)
    $$bindings.trump(trump);
  return `<select name="Trumpf" id="Trumpf"><option value="0" data-svelte-h="svelte-15t01jc">Bitte Wählen</option><option value="2" data-svelte-h="svelte-13c3fup">Herz</option><option value="1" data-svelte-h="svelte-q7fss0">Blatt</option><option value="1" data-svelte-h="svelte-19btgg7">Schellen</option><option value="1" data-svelte-h="svelte-ffkbbd">Eichel</option><option value="4" data-svelte-h="svelte-hn38ju">Blind Herz</option></select>`;
});
const Body = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let currentStiches;
  let trump;
  let { gameOver = false } = $$props;
  let { started = false } = $$props;
  let { game } = $$props;
  let { players } = $$props;
  if ($$props.gameOver === void 0 && $$bindings.gameOver && gameOver !== void 0)
    $$bindings.gameOver(gameOver);
  if ($$props.started === void 0 && $$bindings.started && started !== void 0)
    $$bindings.started(started);
  if ($$props.game === void 0 && $$bindings.game && game !== void 0)
    $$bindings.game(game);
  if ($$props.players === void 0 && $$bindings.players && players !== void 0)
    $$bindings.players(players);
  currentStiches = Array(players.length).fill(0);
  trump = 0;
  return `<tbody>${started ? `${each(game, (round) => {
    return `<tr><td></td> ${each(round, (p) => {
      return `<td>${escape(p)}</td>`;
    })} </tr>`;
  })} <tr>${!gameOver ? `<td>${validate_component(TrumpSelect, "TrumpSelect").$$render($$result, { trump }, {}, {})}</td>` : ``} ${each(players, (p, i) => {
    return `<td>${validate_component(StitchSelect, "StitchSelect").$$render(
      $$result,
      {
        stiches: currentStiches[i],
        leftStiches: currentStiches.reduce((pv, cv) => pv - cv, 5)
      },
      {},
      {}
    )} </td>`;
  })}</tr> ${!gameOver ? `<tr><td><button data-svelte-h="svelte-1bmhmr7">+</button></td></tr>` : ``}` : ``}</tbody>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let started;
  let players;
  let game;
  started = false;
  players = Array();
  game = Array();
  return `<table><thead><th></th> ${each(players, (p) => {
    return `<th>${escape(p)}</th>`;
  })} ${validate_component(Header, "Header").$$render($$result, { started }, {}, {})}</thead> ${validate_component(Body, "Body").$$render($$result, { started, game, players }, {}, {})}</table> ${started ? `<p data-svelte-h="svelte-19thb7p">Game started</p>` : `<button data-svelte-h="svelte-nvuqta">Start Game</button>`}`;
});
export {
  Page as default
};
