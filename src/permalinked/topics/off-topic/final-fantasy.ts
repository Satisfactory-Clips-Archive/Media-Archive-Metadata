import {
	YouTubePlaylist,
} from '../../../utils.ts';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.ts';

export const FinalFantasy = [
	SchemaGenerators.withContext(SchemaGenerators.VideoGameSeries<any>({
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
				}
			)
		],
		subjectOf: [
			YouTubePlaylist('PLbjDnnBIxiEoun-5sdS3OekZiIK9hdQkd', {
				name: 'Final Fantasy',
				startDate: '2021-07-13',
			}),
		],
	})),
];
