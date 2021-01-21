const satisfactory = require('../../../../common/coffee-stain.js');
const {SatisfactoryWikiImage} = require('../../../../utils');

module.exports = [
	{
		"@context": "https://schema.org",
		"@type": "WebPage",
		"name": "Nuclear Energy",
		"description": "Satisfactory Livestream clips about Nuclear Energy",
		"image": [
			SatisfactoryWikiImage(
				{
					wikiname: 'Nuclear_Power_Plant.png',
					encodingFormat: 'image/png',
					width: 512,
					height: 512,
				},
			{
				"name": "In-game building icon for the Nuclear Power Plant.",
				"contentUrl": "https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/4/46/Nuclear_Power_Plant.png/revision/latest?cb=20200311145339&format=original",
				}
			),
			SatisfactoryWikiImage(
				{
					wikiname: 'Nuclear_Waste.png',
					encodingFormat: 'image/png',
					width: 256,
					height: 256,
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
