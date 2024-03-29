import {
	YouTubePlaylist,
	Tweet,
	YouTubeClip,
} from '../../../../../utils.js';
import {
	SchemaGenerators,
} from '../../../../../SchemaTypes.js';

const img = SchemaGenerators.ImageObject(
	'https://pbs.twimg.com/media/E789bICX0AgK0Ph?format=webp&name=large',
	1920,
	1080,
	'image/webp',
	{
		description: 'Willow tree atop grassy cliff edge in left of frame, in front of a cloudy blue sky (3/4 of top of frame) and various rock formations (1/4 of bottom of frame, 5/6 of right of frame).'
	}
);

export default [
	SchemaGenerators.withContext(SchemaGenerators.WebPage('#SaveTheWillows', {
		description: 'Satisfactory Livestream clips relating to the removal of willow trees in Update 5',
		subjectOf: [
			YouTubePlaylist('PLbjDnnBIxiEqNe4SQNEAvhKRLQX39g9Ix', {
				name: '#SaveTheWillows',
				startDate: '2021-08-03',
			}),
			YouTubeClip(
				'MxvGbCCc6DI',
				undefined,
				127.4273,
				272.4388333333333,
				{
					name: 'Jace Talk: Northern Forest feedback',
					uploadDate: '2021-08-06',
				}
			),
			Tweet('SignpostMarv', '1422928134194741251', {
				headline: 'Choose wisely',
				datePublished: '2021-08-04T15:31ZGMT',
				potentialAction: [
					SchemaGenerators.VoteAction({
						actionOption: [
							'Save The Willows',
							'Add More Penis Rocks',
						],
						endTime: '2021-08-11T15:31ZGMT',
					}),
				],
			}),
			Tweet('SatisfactoryAF', '1422923637561102342', {
				datePublished: '2021-08-04T14:13:26.000Z',
				headline: [
					'It holds a vigil',
					'dropping branches as it mourns',
					'the deaths of far kin',
				].join("\n"),
				keywords: [
					'#SaveTheWillows',
				],
				image: [
					SchemaGenerators.ImageObject(
						'https://pbs.twimg.com/media/E789bICX0AgK0Ph?format=jpg&name=large',
						1920,
						1080,
						'image/jpeg',
					),
				],
			}),
		],
		image: [
			img,
		],
	})),
];
