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
				{
					wikiname: 'Steve.png',
					encodingFormat: 'image/png',
					width: 1113,
					height: 1080,
					contentUrl: 'https://satisfactory.wiki.gg/images/f/f3/Steve.png',
				},
				{
					'name': 'Concept Art for Steve',
				}
			),
		],
	}),
];
