import {
	YouTubePlaylist,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../utils.ts';

import type {
	SchemaProperties,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../SchemaTypes.ts';
import {
	SchemaGenerators,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../SchemaTypes.ts';

const FF = [
	SchemaGenerators.withContext(SchemaGenerators.VideoGameSeries<
		SchemaProperties.VideoGameSeries
	>({
		name: 'Final Fantasy',
		image: [
			SchemaGenerators.ImageObject(
				// eslint-disable-next-line @stylistic/max-len
				'https://i-img-archive.satisfactory.video/content/topics/off-topic/final-fantasy--bg.webp',
				504,
				284,
				'image/webp',
				{
					name: 'Final Fantasy 7 Remake Podcast',
				},
			),
		],
		subjectOf: [
			YouTubePlaylist('PLbjDnnBIxiEoun-5sdS3OekZiIK9hdQkd', {
				name: 'Final Fantasy',
				startDate: '2021-07-13',
			}),
		],
	})),
];

export default FF;
