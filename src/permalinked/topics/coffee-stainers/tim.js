const coffee_stain = require('../../../common/coffee-stain.js');
const {SatisfactoryWikiImage} = require('../../../utils');

module.exports = [
	{
		"@context": "https://schema.org",
		"@type": "Person",
		"name": "Tim Badylak",
		"jobTitle": "Producer",
		"image": [
			SatisfactoryWikiImage(
				{
					wikiname: 'Tim_Badylak.png',
					encodingFormat: 'image/png',
					width: 726,
					height: 428,
				},
				{
					"name": "Tim's only known sighting whilst working at Coffee Stain.",
					"contentUrl": "https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/a/a7/Tim_Badylak.png/revision/latest?cb=20201201220500&format=original",
				}
			),
		]
	}
];
