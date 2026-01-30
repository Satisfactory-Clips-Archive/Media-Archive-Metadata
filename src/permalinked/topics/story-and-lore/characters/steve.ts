import {
	default as FICSIT,
// eslint-disable-next-line imports/no-internal-modules
} from '../../../../common/ficsit.ts';
import {
	SatisfactoryWikiImage,
} from '../../../../utils.ts';
import {
	SchemaGenerators,
} from '../../../../SchemaTypes.ts';

export default [
	SchemaGenerators.withContext(SchemaGenerators.Person('Steve', {
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
	})),
];
