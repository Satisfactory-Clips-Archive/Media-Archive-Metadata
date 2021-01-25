import {
	WebPage,
	SatisfactoryWikiImage,
} from '../../../../utils.js';

export default [
	WebPage('Lizard Doggo', {
		description: 'Satisfactory Livestream clips about the Lizard Doggo',
		relatedLink: [
			'https://satisfactory.gamepedia.com/Lizard_Doggo',
		],
		image: [
			SatisfactoryWikiImage(
				{
					wikiname: 'Lizard doggo.png',
					encodingFormat: 'image/png',
					width: 257,
					height: 257,
				},
				{
					"name": "Lizard Doggo, cropped from the GDC 2018 Teaser Trailer.",
					"contentUrl": "https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/7/7a/Lizard_doggo.png/revision/latest?cb=20180322050525&format=original",
				}
			),
		],
	}),
];
