import {
	YouTubePlaylist,
	YouTubeClip,
} from '../../../utils.ts';
import {
	SchemaGenerators,
	SchemaProperties,
} from '../../../SchemaTypes.ts';

const Flannel = [
	SchemaGenerators.withContext(SchemaGenerators.WebPage('Flannel', {
		// eslint-disable-next-line @stylistic/max-len
		description: 'Satisfactory Livestream clips about Coffee Stainers wearing Flannel shirts.',
		subjectOf: [
			YouTubeClip(
				'Dtm6xIj-wM4',
				'UgyaDf7PYKacIuF2Knp4AaABCQ',
				963.214202,
				979.01642,
				{
					name: 'Q&A: Can we get your shirts in-game?',
					uploadDate: '2019-02-06',
				}
			),
			YouTubePlaylist('PLbjDnnBIxiEoFLmKQaDWq_Rl7qd-H_GIA', {
				name: 'Flannel',
				startDate: '2021-06-08',
			}),
		],
		image: [
			SchemaGenerators.ImageObject(
				// eslint-disable-next-line @stylistic/max-len
				'https://i-img-archive.satisfactory.video/content/topics/coffee-stainers/flannel--bg.webp',
				504,
				504,
				'image/webp',
				{
					exampleOfWork: SchemaGenerators.ImageObject(
						// eslint-disable-next-line @stylistic/max-len
						'https://live.staticflickr.com/7309/12951396883_d05fb22ed8_o_d.jpg',
						2200,
						2200,
						'image/jpeg',
						{
							// eslint-disable-next-line @stylistic/max-len
							license: 'https://creativecommons.org/licenses/by/2.0/',
							// eslint-disable-next-line @stylistic/max-len
							url: 'https://www.flickr.com/photos/48013511@N07/12951396883',
							// eslint-disable-next-line @stylistic/max-len
							author: SchemaGenerators.Person<SchemaProperties.Person & {url: string}>('Mike McDonald', {
								// eslint-disable-next-line @stylistic/max-len
								url: 'https://www.flickr.com/photos/emberstudio/',
							}),
						}
					),
				}
			),
		]
	}))
];

export default Flannel;
