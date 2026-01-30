import {
	CoffeeStainer,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../utils.ts';
import {
	SchemaGenerators,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../SchemaTypes.ts';

const Gustav = [
	SchemaGenerators.withContext(CoffeeStainer('Gustav Löfstedt', {
		alternateName: [
			'G2',
		],
		jobTitle: 'Lead Programmer',
	})),
];

export default Gustav;
