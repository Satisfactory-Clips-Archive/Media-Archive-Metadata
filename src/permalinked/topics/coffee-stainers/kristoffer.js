import {
	DuplicateValue,
	ImageObject,
	YouTubeVideo,
	Tweet,
	Person,
} from '../../../utils.js';

export default [
	Person('Kristoffer Anderson', {
		jobTitle: 'Animator',
		subjectOf: [
			YouTubeVideo('fI7gnbG4Omk', {
				name: 'Developer Highlight - Animation',
				description: 'Meet Kristoffer as he talks about Animation, Visual Effects, and Easter Eggs in Satisfactory.',
				uploadDate: '2019-05-24',
			}),
			Tweet('SBegby', '1104027101982797824', {
				headline: 'We are working hard to get @SatisfactoryAF out there for you today!',
				datePublished: '2020-03-08T14:32ZGMT',
				image: [
					ImageObject(
						{
							contentUrl: 'https://pbs.twimg.com/ext_tw_video_thumb/1104027053807071232/pu/img/SpTA9Ef4eommxPaw.jpg',
							width: 675,
							height: 1200,
							encodingFormat: 'image/jpeg',
						},
						{
							description: 'Video poster for tweet',
						}
					)
				],
			}),
		],
	}),
];
