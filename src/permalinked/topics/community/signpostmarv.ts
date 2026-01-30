import {
    SatisfactoryCommunityMember,
} from '../../../utils.ts';
import {
    SchemaGenerators,
} from '../../../SchemaTypes.ts';

export const SignpostMarv = SatisfactoryCommunityMember('Marv', {
    alternateName: ['SignpostMarv'],
    honorificPrefix: 'Signpost',
    url: [
        'https://signpostmarv.name/',
		'https://bsky.app/profile/signpostmarv.name',
		// I rarely use twitter any more
        'https://twitter.com/SignpostMarv',
        'https://mastodon.social/@SignpostMarv',
        'https://steamcommunity.com/id/SignpostMarv/',
        'https://github.com/SignpostMarv/',
        'https://github.com/Satisfactory-Clips-Archive/',
    ],
});

export const SignpostMarv_Person = [
    SchemaGenerators.withContext(Object.assign({}, SignpostMarv)),
];
