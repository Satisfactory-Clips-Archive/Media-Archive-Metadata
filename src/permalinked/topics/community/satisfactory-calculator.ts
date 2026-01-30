import {
    SchemaGenerators,
} from '../../../SchemaTypes.ts';
import {
    WebSiteAboutSatisfactory,
    SatisfactoryCommunityMember,
} from '../../../utils.ts';

export const Anthor = SatisfactoryCommunityMember('Anthor');

export const SCIM = [
    SchemaGenerators.withContext(WebSiteAboutSatisfactory( {
        name: 'Satisfactory Calculator',
        url: 'https://satisfactory-calculator.com/',
        author: Anthor,
        alternateName: 'SCIM',
    })),
];
