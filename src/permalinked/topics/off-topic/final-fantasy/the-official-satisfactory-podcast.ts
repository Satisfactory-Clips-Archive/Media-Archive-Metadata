import {
	YouTubeVideo,
} from '../../../../utils.ts';
import {
	SchemaGenerators,
} from '../../../../SchemaTypes.ts';

export const SatisPod_001 = [
	SchemaGenerators.withContext(YouTubeVideo('', {
		name: 'The Official Satisfactory PODCAST Episode 001',
		description: [
			// eslint-disable-next-line @stylistic/max-len
			'We\'re very excited to share the first episode of the official Satisfactory podcast!',
			// eslint-disable-next-line @stylistic/max-len
			'Join us as we do a deep dive on Satisfactory in a more open format and let discussions go where our hearts takes us!',
		].join(' '),
		uploadDate: '2022-04-01',
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
			),
		],
	})),
];
