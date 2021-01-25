import {SatisfactoryWikiImage, WebPage} from '../../../../utils.js';

export default [
	WebPage('Crab Boss', {
		description: 'Satisfactory Livestream clips about the Crab Boss',
		relatedLink: [
			'https://satisfactory.gamepedia.com/Crab_Boss',
		],
		image: [
			SatisfactoryWikiImage(
				{
					wikiname: 'Crab Boss.png',
					width: 1920,
					height: 1080,
					encodingFormat: 'image/png',
				},
				{
					name: 'The giant Crab Boss from the E3 Trailer',
					contentUrl: 'https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/c/ce/Crab_Boss.png/revision/latest?cb=20210125131853&format=original',
					relatedLink: [
						'https://youtu.be/W_lmP8jYVLs?t=119'
					],
				}
			),
		],
	}),
];
