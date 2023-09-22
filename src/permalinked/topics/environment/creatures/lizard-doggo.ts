import {
	WebPage,
	SatisfactoryWikiImage,
} from '../../../../utils.js';

export default [
	WebPage('Lizard Doggo', {
		description: 'Satisfactory Livestream clips about the Lizard Doggo',
		relatedLink: [
			'https://satisfactory.wiki.gg/wiki/Lizard_Doggo',
		],
		alternateName: [
			'Space Rabbit',
		],
		image: [
			SatisfactoryWikiImage(
				{
					wikiname: 'Lizard Doggo.png',
					encodingFormat: 'image/png',
					width: 257,
					height: 257,
					contentUrl: 'https://satisfactory.wiki.gg/images/7/79/Lizard_Doggo.png',
				},
				{
					"name": "Lizard Doggo, cropped from the GDC 2018 Teaser Trailer.",
				}
			),
		],
	}),
];
