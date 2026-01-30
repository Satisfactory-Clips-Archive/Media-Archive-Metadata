import {
	default as FICSIT,
// eslint-disable-next-line @stylistic/max-len
// eslint-disable-next-line imports/no-internal-modules, imports/no-relative-parent-imports
} from '../../../../common/ficsit.ts';
import {
	SatisfactoryWikiImage,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../../utils.ts';
import {
	SchemaGenerators,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../../SchemaTypes.ts';

const Caterina_Parks = [
	SchemaGenerators.withContext(SchemaGenerators.Person('Caterina Parks', {
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
	})),
];

export default Caterina_Parks;
