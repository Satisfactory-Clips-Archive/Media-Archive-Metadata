import {SatisfactoryWikiImage, WebPage} from '../../../../utils.js';

export default [
	WebPage('Crab Boss', {
		description: 'Satisfactory Livestream clips about the Crab Boss',
		relatedLink: [
			'https://satisfactory.wiki.gg/Crab_Boss',
		],
		image: [
			SatisfactoryWikiImage(
				{
					wikiname: 'Crab Boss.png',
					width: 1920,
					height: 1080,
					encodingFormat: 'image/png',
					contentUrl: 'https://satisfactory.wiki.gg/images/c/ce/Crab_Boss.png',
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
