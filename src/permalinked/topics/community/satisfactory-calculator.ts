import {
    SchemaGenerators,
} from '../../../SchemaTypes.js';
import {
    WebSiteAboutSatisfactory,
    SatisfactoryCommunityMember,
} from '../../../utils.js';

export const Anthor = SatisfactoryCommunityMember('Anthor');

export default [
    SchemaGenerators.withContext(WebSiteAboutSatisfactory( {
        name: 'Satisfactory Calculator',
        url: 'https://satisfactory-calculator.com/',
        author: Anthor,
        alternateName: 'SCIM',
    })),
];
