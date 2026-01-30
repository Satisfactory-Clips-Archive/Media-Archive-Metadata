import {
	Tweet,
} from '../../../../utils.ts';
import {
	default as Snutt,
} from '../snutt.ts';
import {
	SchemaGenerators,
} from '../../../../SchemaTypes.ts';

const burger_time = Tweet('BustaSnutt', '1430230082270937090', {
	headline: 'BURGER TIME!',
	datePublished: '2021-08-24T19:06ZGMT',
	image: [
		SchemaGenerators.ImageObject(
			// eslint-disable-next-line @stylistic/max-len
			'https://pbs.twimg.com/media/E9kyrhsXsAQskjT?format=jpg',
			1024,
			461,
			'image/jpeg',
			{
				description: 'Photo of a burger and chips in a takeout carton',
			}
		),
	]
});

export default [
	// eslint-disable-next-line @stylistic/max-len
	SchemaGenerators.withContext(SchemaGenerators.WebPage('Snutt Burger Time', {
		// eslint-disable-next-line @stylistic/max-len
		description: 'Satisfactory Livestream clips regarding Snutt\'s post-stream Burger time',
		about: [
			Snutt[0],
		],
		image: [
			SchemaGenerators.ImageObject(
				// eslint-disable-next-line @stylistic/max-len
				'https://i-img-archive.satisfactory.video/content/topics/coffee-stainers/snutt/snutt-burger-time--bg.png',
				598,
				476,
				'image/png',
				{
					exampleOfWork: burger_time,
				}
			)
		],
	})),
];
