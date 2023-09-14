type Player = {
	name: string;
};

type Colors = 'Herz' | 'Schelle' | 'Eichel' | 'Grün' | '';

type Game = {
	players: Player[];
	rounds: Round[];
	started: boolean;
};
type Round = {
	trump: Colors;
	points: int[];
};
