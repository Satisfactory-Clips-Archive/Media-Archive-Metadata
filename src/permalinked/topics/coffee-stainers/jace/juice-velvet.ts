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
				'https://satisfactory.wiki.gg/images/8/88/Juice_Velvet.png',
				354,
				360,
				'image/png',
				'Juice_Velvet.png',
				{
					name: 'Image of Jace Varlet, Community Manager at Coffee Stain, as his salesman persona Juice Velvet.',
				}
			),
		],
	}),
];
