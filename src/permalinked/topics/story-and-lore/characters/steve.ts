// eslint-disable-next-line @stylistic/max-len
// eslint-disable-next-line imports/no-internal-modules, imports/no-relative-parent-imports
import FICSIT from '../../../../common/ficsit.ts';

import {
	SatisfactoryWikiImage,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../../utils.ts';
import {
	SchemaGenerators,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../../SchemaTypes.ts';

const Steve = [
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
				},
			),
		],
	})),
];

export default Steve;
