import {
	Tweet,
} from '../../../../utils.js';
import {
	default as Snutt,
} from '../snutt.js';
import {
	SchemaGenerators,
} from '../../../../SchemaTypes.js';

export default [
	SchemaGenerators.WebPage('Snutt Burger Time', {
		description: 'Satisfactory Livestream clips regarding Snutt\'s post-stream Burger time',
		about: [
			Snutt[0],
		],
		image: [
			SchemaGenerators.ImageObject(
				'https://i-img-archive.satisfactory.video/content/topics/coffee-stainers/snutt/snutt-burger-time--bg.png',
				598,
				476,
				'image/png',
				{
					exampleOfWork: Tweet('BustaSnutt', '1430230082270937090', {
						headline: 'BURGER TIME!',
						datePublished: '2021-08-24T19:06ZGMT',
						image: [
							SchemaGenerators.ImageObject(
								'https://pbs.twimg.com/media/E9kyrhsXsAQskjT?format=jpg',
								1024,
								461,
								'image/jpeg',
								{
									description: 'Photo of a burger and chips in a takeout carton',
								}
							),
						]
					}),
				}
			)
		],
	}),
];
