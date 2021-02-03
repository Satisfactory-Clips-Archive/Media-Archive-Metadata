import {
	SatisfactoryWikiBuildingImage,
	SatisfactoryWikiItemImage,
	WebPageAboutSatisfactory,
} from '../../../../utils.js';

export default [
	WebPageAboutSatisfactory('Nuclear Energy', {
		"image": [
			SatisfactoryWikiBuildingImage(
				{
					wikiname: 'Nuclear_Power_Plant.png',
					contentUrl: 'https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/4/46/Nuclear_Power_Plant.png/revision/latest?cb=20200311145339&format=original',
				},
				{
					"name": "In-game building icon for the Nuclear Power Plant.",
				}
			),
			SatisfactoryWikiItemImage(
				{
					wikiname: 'Nuclear_Waste.png',
					contentUrl: 'https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/a/a1/Nuclear_Waste.png/revision/latest?cb=20190626163606&format=original',
				},
				{
					"name": "In-game item icon for Nuclear Waste.",
				}
			),
		],
	}),
];
