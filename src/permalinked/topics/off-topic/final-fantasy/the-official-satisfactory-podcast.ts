import {
	YouTubeVideo,
} from '../../../../utils.js';
import {
	SchemaGenerators,
} from '../../../../SchemaTypes.js';

export default [
	YouTubeVideo('', {
		'@context': 'https://schema.org',
		name: 'The Official Satisfactory PODCAST Episode 001',
		description: [
			'We\'re very excited to share the first episode of the official Satisfactory podcast!',
			'Join us as we do a deep dive on Satisfactory in a more open format and let discussions go where our hearts takes us!',
		].join(' '),
		uploadDate: '2022-04-01',
		image: [
			SchemaGenerators.ImageObject(
				'https://i-img-archive.satisfactory.video/content/topics/off-topic/final-fantasy--bg.webp',
				504,
				284,
				'image/webp',
				{
					name: 'Final Fantasy 7 Remake Podcast',
				}
			),
		],
	}),
];
