import {
	YouTubePlaylist,
	Person,
	SatisfactoryWikiImage,
} from '../../../../utils.js';

export default [
	Person('Snutty Mays', {
		subjectOf: [
			YouTubePlaylist('PLbjDnnBIxiErPJIX0NWiekKXFIrs8d4mO', {
				name: 'Snutty Mays',
				startDate: '2021-10-26',
				endDate: '2021-11-30,'
			}),
		],
		image: [
			SatisfactoryWikiImage(
				{
					wikiname: 'Snutty_Mays.png',
					encodingFormat: 'image/png',
					width: 354,
					height: 360,
					contentUrl: 'https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/6/60/Snutty_Mays.png/revision/latest/scale-to-width-down/354?cb=20211118193434',
				},
				{
					name: 'Image of Snutt Treptow, Community Manager at Coffee Stain, as his salesman persona Snutty Mays.',
				}
			),
		],
	}),
];
