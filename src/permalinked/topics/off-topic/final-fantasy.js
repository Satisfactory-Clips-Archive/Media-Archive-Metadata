import {
	default as coffee_stain
} from '../../../common/coffee-stain.js';
import {
	ImageObject,
	YouTubePlaylist,
	YouTubeVideo,
} from '../../../utils.js';

export default [
	{
		'@context': 'https://schema.org',
		'@type': 'VideoGameSeries',
		name: 'Final Fantasy',
		image: [
			ImageObject(
				{
					contentUrl: 'https://i.img.archive.satisfactory.video/content/topics/off-topic/final-fantasy--bg.webp',
					width: 504,
					height: 284,
					encodingFormat: 'image/webp',
				},
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
