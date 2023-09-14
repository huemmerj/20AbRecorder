<script>
	import Header from './Header.svelte';
	import Body from './Body.svelte';

	/**
	 * @type Game
	 */
	let game = {
		players: [],
		rounds: [],
		started: false
	};
	let initGame = () => {
		game.rounds = [{ points: [], trump: '' }];
		game.players.forEach((p) => {
			game.rounds[0].points.push(20);
		});
		game.started = true;
	};
</script>

<table>
	<thead>
		<th />
		{#each game.players as p}
			<th>{p}</th>
		{/each}
		<Header
			on:addPlayer={(name) => {
				console.log(game.players);
				game.players = [...game.players, name.detail];
			}}
			started={game.started}
		/>
	</thead>
	<Body started={game.started} {game} />
</table>

{#if game.started}
	<p>Game started</p>
{:else}
	<button on:click={initGame}>Start Game</button>
{/if}
