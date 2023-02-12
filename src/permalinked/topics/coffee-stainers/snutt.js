import {
	YouTubeVideo,
	CoffeeStainer,
} from '../../../utils.js';

import {
	default as SnuttyMays,
} from './snutt/snutty-mays.js';

export default [
	CoffeeStainer('Snutt Treptow', {
		"jobTitle": [
			"Community Manager",
			"Joshie Wrangler"
		],
		"subjectOf": [
			YouTubeVideo('N1o3tK1h8cM', {
				name: 'New Community Manager - REVEALED',
				description: 'Meet our new Community Manager. Now Jace\'s Runescape gains are gonna be off the chart!',
				uploadDate: '2019-12-13',
			}),
			YouTubeVideo('N6yki_HwBNQ', {
				"name": "I was a SPEAKER at a GAME DEV CONFERENCE",
				"description": "They invited me to speak at a game developer conference! Weird. Here's a video about that!",
				"uploadDate": "2020-03-02",
			}),
		],
		character: [
			SnuttyMays[0],
		],
		"url": [
			"https://twitter.com/BustaSnutt"
		]
	}),
];
