import {
	SchemaGenerators,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../SchemaTypes.ts';
import {
	SatisfactoryCommunityMember,
	WebSiteAboutSatisfactory,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../../../utils.ts';

const Anthor = SatisfactoryCommunityMember('Anthor');

const SCIM = [
	SchemaGenerators.withContext(WebSiteAboutSatisfactory({
		name: 'Satisfactory Calculator',
		url: 'https://satisfactory-calculator.com/',
		author: Anthor,
		alternateName: 'SCIM',
	})),
];

export {
	Anthor,
	SCIM,
};

export default SCIM;
