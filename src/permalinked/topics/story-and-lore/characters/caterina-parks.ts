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
