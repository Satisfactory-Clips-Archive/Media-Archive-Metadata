import {
	WebPage,
	SatisfactoryWikiImage,
} from '../../../../utils.js';

export default [
	WebPage('Lizard Doggo', {
		description: 'Satisfactory Livestream clips about the Lizard Doggo',
		relatedLink: [
			'https://satisfactory.gamepedia.com/Space_Giraffe-Tick-Penguin-Whale_Thing',
		],
		alternateName: [
			'Land Whale',
			'Chonky Boy',
			'Chonky Boi',
			'Mr. Bean',
			'Space Tick',
		],
		image: [
			SatisfactoryWikiImage(
				{
					wikiname: 'File:Space Giraffe-Tick-Penguin-Whale Thing.png',
					encodingFormat: 'image/png',
					width: 608,
					height: 709,
					contentUrl: 'https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/7/73/Space_Giraffe-Tick-Penguin-Whale_Thing.png/revision/latest?cb=20201128093914&format=original',
				},
				{
					"name": "The Space Giraffe-Tick-Penguin-Whale Thing (sometimes referred to as Land Whale, chonky boy, mr. Bean, etc.) is a passive land creature found throughout the world.",
				}
			),
		]
	}),
];
