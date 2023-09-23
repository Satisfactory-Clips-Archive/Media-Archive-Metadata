import {
	YouTubePlaylist,
} from '../../../utils.js';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.js';

export default [
	{
		'@context': 'https://schema.org',
		'@type': 'VideoGameSeries',
		name: 'Final Fantasy',
		image: [
			SchemaGenerators.ImageObject(
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
	},
];
