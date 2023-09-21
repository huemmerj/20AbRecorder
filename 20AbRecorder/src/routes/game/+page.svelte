<script lang=ts>
	import Header from './Header.svelte';
	import Body from './Body.svelte';
	$: started = false;
	$: players = Array<string>();
	$: game = Array<Array<number>>();
	let initGame = () => {
		started = true;
		game.push(Array<number>())
		players.forEach((_) => {
			game[0].push(20);
		});
		game = [...game];
	};
</script>

<table>
	<thead>
		<th />
		{#each players as p}
			<th>{p}</th>
		{/each}
		<Header
			on:addPlayer={(name) => {
				console.log(players);
				players = [...players, name.detail];
			}}
			started={started}
		/>
	</thead>
	<Body started={started} {game} {players}/>
</table>

{#if started}
	<p>Game started</p>
{:else}
	<button on:click={initGame}>Start Game</button>
{/if}
