import {default as satisfactory} from '../../../../../common/satisfactory.js';
import {
	SatisfactoryWikiItemImage,
} from '../../../../../utils.js';

export default [
	{
		"@context": "https://schema.org",
		"@type": "WebPage",
		"name": "Nuclear Waste",
		"description": "Satisfactory Livestream clips about Nuclear Waste",
		"image": [
			SatisfactoryWikiItemImage(
				{
					wikiname: 'Nuclear_Waste.png',
				},
				{
					"name": "In-game item icon for Nuclear Waste.",
					"contentUrl": "https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/a/a1/Nuclear_Waste.png/revision/latest?cb=20190626163606&format=original",
				}
			),
		],
		"about": [
			satisfactory,
		]
	}
];
