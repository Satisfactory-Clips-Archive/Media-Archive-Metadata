import {
	Tweet,
	YouTubePlaylist,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../../utils.ts';
import {
	SchemaGenerators,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../../SchemaTypes.ts';

const Robo_Jace = [
	SchemaGenerators.withContext(SchemaGenerators.Person('Robo Jace', {
		subjectOf: [
			YouTubePlaylist('PLbjDnnBIxiErdTAJdeOIHMN2m3pR245LA', {
				name: 'Robo Jace',
				startDate: '2022-03-01',
				endDate: '2022-03-01,',
			}),
		],
		image: [
			SchemaGenerators.ImageObject(
				// eslint-disable-next-line @stylistic/max-len
				'https://pbs.twimg.com/media/FMRR2wUXEAM3_Vs?format=jpg&name=medium',
				976,
				1080,
				'image/jpeg',
				{
					// eslint-disable-next-line @stylistic/max-len
					exampleOfWork: Tweet('SatisfactoryAF', '1496469900965163013', {
						headline: 'how it started vs how its going',
						datePublished: '2022-02-23T13:00:02.000Z',
						image: [
							SchemaGenerators.ImageObject(
								// eslint-disable-next-line @stylistic/max-len
								'https://pbs.twimg.com/media/FMRRj3NX0AAy1L1?format=png&name=small',
								593,
								233,
								'image/png',
							),
							SchemaGenerators.ImageObject(
								// eslint-disable-next-line @stylistic/max-len
								'https://pbs.twimg.com/media/FMRR2wUXEAM3_Vs?format=jpg&name=medium',
								976,
								1080,
								'image/jpeg',
							),
						],
					}),
				},
			),
		],
	})),
];

export default Robo_Jace;
