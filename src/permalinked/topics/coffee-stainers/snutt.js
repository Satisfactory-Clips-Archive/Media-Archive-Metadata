const coffee_stain = require('../../../common/coffee-stain.js');
const { YouTubeVideo } = require('../../../utils');

module.exports = [
	{
		"@context": "https://schema.org",
		"@type": "Person",
		"name": "Snutt Treptow",
		"jobTitle": "Community Manager",
		"worksFor": coffee_stain,
		"subjectOf": [
			YouTubeVideo('N6yki_HwBNQ', {
				"name": "I was a SPEAKER at a GAME DEV CONFERENCE",
				"description": "They invited me to speak at a game developer conference! Weird. Here's a video about that!",
				"uploadDate": "2020-03-02",
			}),
		],
		"url": [
			"https://twitter.com/BustaSnutt"
		]
	}
];
