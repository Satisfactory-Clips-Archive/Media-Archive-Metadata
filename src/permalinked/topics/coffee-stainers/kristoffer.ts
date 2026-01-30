import {
	YouTubeVideo,
	Tweet,
	FormerCoffeeStainer,
} from '../../../utils.ts';
import {
	SchemaGenerators,
} from '../../../SchemaTypes.ts';

export const Kristoffer = [
	SchemaGenerators.withContext(FormerCoffeeStainer('Kristoffer Anderson', {
		subjectOf: [
			YouTubeVideo('fI7gnbG4Omk', {
				name: 'Developer Highlight - Animation',
				// eslint-disable-next-line @stylistic/max-len
				description: 'Meet Kristoffer as he talks about Animation, Visual Effects, and Easter Eggs in Satisfactory.',
				uploadDate: '2019-05-24',
			}),
			Tweet('SBegby', '1104027101982797824', {
				// eslint-disable-next-line @stylistic/max-len
				headline: 'We are working hard to get @SatisfactoryAF out there for you today!',
				datePublished: '2020-03-08T14:32ZGMT',
				image: [
					SchemaGenerators.ImageObject(
						// eslint-disable-next-line @stylistic/max-len
						'https://pbs.twimg.com/ext_tw_video_thumb/1104027053807071232/pu/img/SpTA9Ef4eommxPaw.jpg',
						675,
						1200,
						'image/jpeg',
						{
							description: 'Video poster for tweet',
						}
					)
				],
			}),
		],
	})),
];
