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
					contentUrl: 'https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/b/bc/Wiki.png/revision/latest?cb=20180618033349&format=original',
				},
				{
					"name": "Logo for the Satisfactory Wiki.",
				}
			),
		],
	}),
];
