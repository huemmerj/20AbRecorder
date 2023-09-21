<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	export let trump = 0
</script>

<select name="Trumpf" bind:value={trump} on:change={(newTrump) => { dispatch("newTrump", trump)}} id="Trumpf">
	<option value=0>Bitte Wählen</option>
	<option value=2>Herz</option>
	<option value=1>Blatt</option>
	<option value=1>Schellen</option>
	<option value=1>Eichel</option>
	<option value=4>Blind Herz</option>
</select>
