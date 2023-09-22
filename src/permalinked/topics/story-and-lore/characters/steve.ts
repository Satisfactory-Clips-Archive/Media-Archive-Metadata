import {
	default as FICSIT,
} from '../../../../common/ficsit.js';
import {
	Person,
	SatisfactoryWikiImage,
} from '../../../../utils.js';

export default [
	Person('Steve', {
		jobTitle: 'Personal Assistant',
		worksFor: FICSIT,
		url: [
			'https://satisfactory.wiki.gg/wiki/Steve',
		],
		image: [
			SatisfactoryWikiImage(
				'https://satisfactory.wiki.gg/images/f/f3/Steve.png',
				1113,
				1080,
				'image/png',
				'Steve.png',
				{
					'name': 'Concept Art for Steve',
				}
			),
		],
	}),
];
