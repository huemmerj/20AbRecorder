<script>
	import Header from './Header.svelte';
	import Body from './Body.svelte';
	/**
	 * @type {string[]}
	 */
	let player = [];
	let started = false;
</script>

<table>
	<thead>
		{#each player as p}
			<th>{p}</th>
		{/each}
		<th />
		<Header
			on:addPlayer={(name) => {
				console.log(player);
				player = [...player, name.detail];
			}}
			{started}
		/>
	</thead>
	<Body {player} {started} />
</table>

{#if started}
	<p>Game started</p>
{:else}
	<button
		on:click={() => {
			started = true;
		}}>Start Game</button
	>
{/if}
