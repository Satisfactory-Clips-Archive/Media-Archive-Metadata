import {
	YouTubePlaylist,
	Person,
	SatisfactoryWikiImage,
} from '../../../../utils.js';

export default [
	Person('Juice Velvet', {
		subjectOf: [
			YouTubePlaylist('PLbjDnnBIxiEosygjoYTHIREXy9ZtlTDfQ', {
				name: 'Juice Velvet',
				startDate: '2021-10-26',
				endDate: '2021-11-30,'
			}),
		],
		image: [
			SatisfactoryWikiImage(
				{
					wikiname: 'Juice_Velvet.png',
					encodingFormat: 'image/png',
					width: 354,
					height: 360,
					contentUrl: 'https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/8/88/Juice_Velvet.png/revision/latest/scale-to-width-down/354?cb=20211118193054',
				},
				{
					name: 'Image of Jace Varlet, Community Manager at Coffee Stain, as his salesman persona Juice Velvet.',
				}
			),
		],
	}),
];
