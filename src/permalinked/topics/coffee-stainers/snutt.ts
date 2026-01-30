import {
	YouTubeVideo,
	CoffeeStainer,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../utils.ts';
import {
	SchemaGenerators,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../SchemaTypes.ts';

// eslint-disable-next-line imports/no-internal-modules
import SnuttyMays from './snutt/snutty-mays.ts';

const Snutt = [
	SchemaGenerators.withContext(CoffeeStainer('Snutt Treptow', {
		"jobTitle": [
			"Community Manager",
			"Joshie Wrangler"
		],
		"subjectOf": [
			YouTubeVideo('N1o3tK1h8cM', {
				name: 'New Community Manager - REVEALED',
				// eslint-disable-next-line @stylistic/max-len
				description: 'Meet our new Community Manager. Now Jace\'s Runescape gains are gonna be off the chart!',
				uploadDate: '2019-12-13',
			}),
			YouTubeVideo('N6yki_HwBNQ', {
				"name": "I was a SPEAKER at a GAME DEV CONFERENCE",
				// eslint-disable-next-line @stylistic/max-len
				"description": "They invited me to speak at a game developer conference! Weird. Here's a video about that!",
				"uploadDate": "2020-03-02",
			}),
		],
		character: [
			SchemaGenerators.withoutContext(SnuttyMays[0]),
		],
		"url": [
			"https://twitter.com/BustaSnutt"
		]
	})),
];

export default Snutt;
