import {
	CoffeeStainer,
} from '../../../utils.ts';
import {
	SchemaGenerators,
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
