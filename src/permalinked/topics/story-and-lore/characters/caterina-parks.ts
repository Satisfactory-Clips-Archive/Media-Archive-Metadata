import {
	default as FICSIT,
} from '../../../../common/ficsit.js';
import {
	SatisfactoryWikiImage,
} from '../../../../utils.js';
import {
	SchemaGenerators,
} from '../../../../SchemaTypes.js';

export default [
	SchemaGenerators.Person('Caterina Parks', {
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
