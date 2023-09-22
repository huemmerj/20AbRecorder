<script lang=ts>

	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();
	export let stiches: number;
	export let leftStiches: number;
	export let points: number;
</script>
<select bind:value={stiches} on:change={ () => dispatch('changeStiches', stiches)} name="stiches" >
	{#if points > 5}<option value=-1>Geht</option>{/if}
	<option value=-5>0</option>
	{#each Array(leftStiches+stiches) as _, i}
		<option value={i+1}>{i+1}</option>
	{/each}
</select>
