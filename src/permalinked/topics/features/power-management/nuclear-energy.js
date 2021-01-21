const satisfactory = require('../../../../common/satisfactory.js');
const {
	SatisfactoryWikiBuildingImage,
	SatisfactoryWikiItemImage,
} = require('../../../../utils');

module.exports = [
	{
		"@context": "https://schema.org",
		"@type": "WebPage",
		"name": "Nuclear Energy",
		"description": "Satisfactory Livestream clips about Nuclear Energy",
		"image": [
			SatisfactoryWikiBuildingImage(
				{
					wikiname: 'Nuclear_Power_Plant.png',
				},
				{
					"name": "In-game building icon for the Nuclear Power Plant.",
					"contentUrl": "https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/4/46/Nuclear_Power_Plant.png/revision/latest?cb=20200311145339&format=original",
				}
			),
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
