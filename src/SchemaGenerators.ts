import type {
	Schema,
	SchemaObject,
	SchemaProperties,
} from './SchemaTypes.ts';

function generate<
	T1 extends string,
	T2 extends {[key: string]: unknown},
>(
	type: T1,
	data: T2,
): SchemaObject<T1, T2> {
	return {
		...data,
		'@type': type,
	};
}

function withContext<
	T1 extends string,
	T2 extends string,
	T3 extends Exclude<SchemaObject<T1>, {'@context': string}>,
>(
	data: T3,
	context: T2 = 'https://schema.org' as T2,
): SchemaObject<T1, (
	& T3
	& {'@context': T2}
)> {
	return {
		...data,
		'@context': context,
	};
}

function withoutContext<
	T1 extends string,
>(
	data: SchemaObject<T1, {'@context'?: string}>,
): SchemaObject<T1, Omit<typeof data, '@context'>> {
	const cloned = {...data};

	delete cloned['@context'];

	return cloned;
}

function QuantitativeValue(value: number): Schema.QuantitativeValue {
	return generate<
		'QuantitativeValue',
		SchemaProperties.QuantitativeValue
	>('QuantitativeValue', {
		value,
	});
}

function ImageObject<
	T1 extends Omit<
		SchemaProperties.ImageObjectOptional,
		(
			| 'contentUrl'
			| 'width'
			| 'height'
			| 'encodingFormat'
		)
	> = Omit<
		SchemaProperties.ImageObjectOptional,
		(
			| 'contentUrl'
			| 'width'
			| 'height'
			| 'encodingFormat'
		)
	>,
>(
	contentUrl: string,
	width: number,
	height: number,
	encodingFormat: SchemaProperties.mime_type,
	data?: T1,
) {
	return generate<
		'ImageObject',
		(
			& SchemaProperties.ImageObject
			& typeof data
		)
	>(
		'ImageObject',
		{
			...(data || ({} as T1)),
			contentUrl,
			encodingFormat,
			width: QuantitativeValue(width),
			height: QuantitativeValue(height),
		},
	);
}

function WebSite<T1 extends SchemaProperties.WebSite>(data: T1) {
	return generate('WebSite', data);
}

function WebPage<
	T1 extends SchemaProperties.WebPage,
>(
	name: string,
	data: (
		& T1
		& Schema.SubjectOf
		& Schema.has_image<SchemaProperties.ImageObject>
	),
): Schema.WebPage<typeof data> {
	return generate<'WebPage', typeof data>(
		'WebPage',
		{
			...data,
			name,
		},
	);
}

function Person<
	T1 extends SchemaProperties.Person,
>(
	name: string,
	data: T1,
): Schema.Person<T1> {
	return generate<
		'Person',
		T1
	>(
		'Person',
		{
			...data,
			name,
		},
	);
}

function Organization<
	T1 extends SchemaProperties.Organization,
>(data: T1) {
	return generate('Organization', data);
}

function VoteAction<T1 extends SchemaProperties.VoteAction>(data: T1) {
	return generate('VoteAction', data);
}

function SocialMediaPosting<
	T1 extends SchemaProperties.SocialMediaPosting,
>(url: string, data: T1): Schema.SocialMediaPosting<T1> {
	return generate<'SocialMediaPosting', T1>(
		'SocialMediaPosting',
		{
			...data,
			url,
		},
	);
}

function VideoGame<T1 extends SchemaProperties.VideoGame>(
	data: T1,
): Schema.VideoGame<T1> {
	return generate('VideoGame', data);
}

function VideoGameSeries<T1 extends SchemaProperties.VideoGameSeries>(
	data: T1,
): Schema.VideoGameSeries<T1> {
	return generate('VideoGameSeries', data);
}

function Software<T1 extends SchemaProperties.Software>(
	data: T1,
): Schema.Software<T1> {
	return generate('Software', data);
}

export {
	generate,
	withContext,
	withoutContext,
	QuantitativeValue,
	ImageObject,
	WebSite,
	WebPage,
	Person,
	Organization,
	VoteAction,
	SocialMediaPosting,
	VideoGame,
	VideoGameSeries,
	Software,
};
