import {
	default as FICSIT,
} from '../../../../common/ficsit.js';
import {
	Person,
	SatisfactoryWikiImage,
} from '../../../../utils.js';

export default [
	Person('Caterina Parks', {
		jobTitle: 'CEO',
		worksFor: FICSIT,
		url: [
			'https://satisfactory.wiki.gg/wiki/Caterina_Parks',
		],
		image: [
			SatisfactoryWikiImage(
				{
					wikiname: 'Caterina Parks.png',
					encodingFormat: 'image/png',
					width: 1037,
					height: 1080,
					contentUrl: 'https://satisfactory.wiki.gg/images/a/a5/Caterina_Parks.png',
				},
				{
					'name': 'Concept Art for Caterina Parks',
				}
			),
		],
	}),
];
