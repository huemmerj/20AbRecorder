<script>
	/**
	 * @type {string[]}
	 */
	export let player;

	/**
	 * @type {boolean}
	 */
	export let started = false;
</script>

<tbody>
	<tr>
		{#if started}
			{#each player as p}
				<td>20</td>
			{/each}
		{/if}
	</tr>
</tbody>
