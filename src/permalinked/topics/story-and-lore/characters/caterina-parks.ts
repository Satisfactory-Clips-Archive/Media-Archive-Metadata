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
				'https://satisfactory.wiki.gg/images/a/a5/Caterina_Parks.png',
				1037,
				1080,
				'image/png',
				'Caterina Parks.png',
				{
					'name': 'Concept Art for Caterina Parks',
				}
			),
		],
	}),
];
