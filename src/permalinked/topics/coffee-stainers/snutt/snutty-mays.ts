import {
	SatisfactoryWikiImage,
	YouTubePlaylist,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../../utils.ts';
import {
	SchemaGenerators,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../../SchemaTypes.ts';

const Snutty_Mays = [
	SchemaGenerators.withContext(SchemaGenerators.Person('Snutty Mays', {
		subjectOf: [
			YouTubePlaylist('PLbjDnnBIxiErPJIX0NWiekKXFIrs8d4mO', {
				name: 'Snutty Mays',
				startDate: '2021-10-26',
				endDate: '2021-11-30,',
			}),
		],
		image: [
			SatisfactoryWikiImage(
				'https://satisfactory.wiki.gg/images/6/60/Snutty_Mays.png',
				354,
				360,
				'image/png',
				'Snutty_Mays.png',
				{
					// eslint-disable-next-line @stylistic/max-len
					name: 'Image of Snutt Treptow, Community Manager at Coffee Stain, as his salesman persona Snutty Mays.',
				},
			),
		],
	})),
];

export default Snutty_Mays;
