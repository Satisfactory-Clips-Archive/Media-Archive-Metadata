import {SatisfactoryWikiImage, WebPage} from '../../../../utils.js';

export default [
	WebPage('Crab Boss', {
		description: 'Satisfactory Livestream clips about the Crab Boss',
		relatedLink: [
			'https://satisfactory.fandom.com/Crab_Boss',
		],
		image: [
			SatisfactoryWikiImage(
				{
					wikiname: 'Crab Boss.png',
					width: 1920,
					height: 1080,
					encodingFormat: 'image/png',
					contentUrl: 'https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/c/ce/Crab_Boss.png/revision/latest?cb=20210125131853&format=original',
				},
				{
					name: 'The giant Crab Boss from the E3 Trailer',
					relatedLink: [
						'https://youtu.be/W_lmP8jYVLs?t=119'
					],
				}
			),
		],
	}),
];
