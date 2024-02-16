<script>
	import StitchSelect from './StitchSelect.svelte';
	import TrumpSelect from './TrumpSelect.svelte';

	/**
	 * @type {boolean}
	 */
	export let started = false;

	/**
	 * @type Game
	 */
	export let game;
</script>

<tbody>
	{#if started}
		{#each game.rounds as round}
			<tr>
				<td />
				{#each round.points as p}
					<td>{p}</td>
				{/each}
			</tr>
		{/each}
	{/if}
	{#if started}
		<tr>
			<td><TrumpSelect /></td>
			{#each game.players as p}
				<td><StitchSelect /> </td>
			{/each}
		</tr>
	{/if}
</tbody>
