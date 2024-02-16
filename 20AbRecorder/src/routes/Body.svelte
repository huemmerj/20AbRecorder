<script lang=ts>
	import StitchSelect from './StitchSelect.svelte';
	import TrumpSelect from './TrumpSelect.svelte';

	export let gameOver = false;
	export let started = false;
	export let game: Array<Array<number>>;
	export let players: Array<string>;
		// initialize every with 0 stiches
	$: currentStiches = Array<number>(players.length).fill(0);
	
	$: trump = 0;

	$: notReady = currentStiches.reduce((pv, cv) => cv < 0? pv:pv + cv, 0) != 5 || trump == 0;
	const submitRound = () => {
		game.push(Array<number>());
		for (let i = 0; i < players.length; i++) {
			let last = game[game.length - 2][i];
			if (currentStiches[i] == -1) {
				game[game.length - 1][i] = last + trump;
			}
			game[game.length - 1][i] = last - currentStiches[i]*trump;
		}
		game = [...game];
		trump = 0;
		currentStiches = Array<number>(players.length).fill(0);
		checkWin();
	};

	const checkWin = () => {
		console.log(game)
		game[game.length - 1].forEach((p) => {
			if (p <= 0) {
				gameOver = true;
			}
		});
	};
</script>

<tbody>
	{#if started}
		{#each game as round}
			<tr>
				<td />
				{#each round as p}
					<td>{p}</td>
				{/each}
			</tr>
		{/each}
		{#if !gameOver}
		<tr>
			<td><TrumpSelect {trump} on:newTrump={(newTrump) => trump = newTrump.detail}/></td>
			{#each players as p, i}
				<td>
					<StitchSelect
						stiches={currentStiches[i]}
						leftStiches={currentStiches.reduce((pv, cv)=> cv <0? pv: pv - cv, 5)}
						on:changeStiches={(stiches) => {
							currentStiches[i] = stiches.detail;
							currentStiches = [...currentStiches];
						}}
						points={game[game.length-1][i]}
					/> 
				</td>
			{/each}
		</tr>
		{/if}
		{#if !gameOver}
			<tr>
				<td>
					{#if notReady}
						<button disabled>+</button>
					{:else}
						<button on:click={submitRound}>+</button>
					{/if}
				</td>
			</tr>
		{/if}
	{/if}

</tbody>
