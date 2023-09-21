<script>
	import { createEventDispatcher } from 'svelte';

	export let started = false;
	const dispatch = createEventDispatcher();
	let newPlayer = false;
	function onAddPlayer() {
		// dispatch('addPlayer', 'Jens');
		newPlayer = true;
	}
	let newPlayerName = '';
</script>

<th>
	{#if newPlayer}
		<input
			type="text"
			bind:value={newPlayerName}
			on:blur={() => {
				dispatch('addPlayer', newPlayerName);
				newPlayer = false;
				newPlayerName = '';
			}}
		/>
	{:else if !started}
		<button on:click={onAddPlayer}>+</button>
	{/if}
</th>
