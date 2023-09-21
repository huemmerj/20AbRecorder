<script lang=ts>

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	export let stiches: number = 0;
	export let leftStiches: number = 5;
</script>
<select bind:value={stiches} on:change={ () => dispatch('changeStiches', stiches)} name="stiches">
	{#each Array(leftStiches+stiches + 1) as _, i}
		<option value={i}>{i}</option>
	{/each}
</select>
