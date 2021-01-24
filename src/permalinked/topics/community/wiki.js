import {default as satisfactory} from '../../../common/satisfactory.js';
import {
	SatisfactoryWikiImage,
} from '../../../utils.js';

export default [
	{
		"@context": "https://schema.org",
		"@type": "WebPage",
		"name": "Satisfactory Wiki",
		"description": "Satisfactory Livestream clips about the Satisfactory Wiki",
		"image": [
			SatisfactoryWikiImage(
				{
					wikiname: 'Wiki.png',
					width: 811,
					height: 315,
					encodingFormat: 'image/png',
				},
				{
					"name": "Logo for the Satisfactory Wiki.",
					"contentUrl": "https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/b/bc/Wiki.png/revision/latest?cb=20180618033349&format=original",
					usageInfo: [
						'https://www.fandom.com/licensing',
					]
				}
			),
		],
		"about": [
			satisfactory,
		]
	}
];
