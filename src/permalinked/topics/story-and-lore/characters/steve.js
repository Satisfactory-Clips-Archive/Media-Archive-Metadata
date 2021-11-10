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
			'https://satisfactory.fandom.com/wiki/Steve',
		],
		image: [
			SatisfactoryWikiImage(
				{
					wikiname: 'Steve.png',
					encodingFormat: 'image/png',
					width: 1113,
					height: 1080,
					contentUrl: 'https://static.wikia.nocookie.net/satisfactory_gamepedia_en/images/f/f3/Steve.png/revision/latest?cb=20180815211730',
				},
				{
					'name': 'Concept Art for Steve',
				}
			),
		],
	}),
];
