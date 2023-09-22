import {
	SatisfactoryWikiImage,
	WebPageAboutSatisfactory,
} from '../../../utils.js';

export default [
	WebPageAboutSatisfactory('Satisfactory Wiki', {
		"description": "Satisfactory Livestream clips about the Satisfactory Wiki",
		"image": [
			SatisfactoryWikiImage(
				{
					wikiname: 'Wiki.png',
					width: 811,
					height: 315,
					encodingFormat: 'image/png',
					contentUrl: 'https://satisfactory.wiki.gg/images/e/e6/Site-logo.png',
				},
				{
					"name": "Logo for the Satisfactory Wiki.",
				}
			),
		],
	}),
];
