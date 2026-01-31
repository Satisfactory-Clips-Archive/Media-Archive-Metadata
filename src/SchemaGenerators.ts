import type {
	Schema,
	SchemaObject,
	SchemaProperties,
} from './SchemaTypes.ts';

function generate<
	T1 extends string,
	T2 extends object,
>(
	type: T1,
	data: T2,
): SchemaObject<T1> & T2 {
	return Object.assign({}, data, {
		'@type': type as T1,
	}) as (SchemaObject<T1> & T2);
}

function withContext<
	T1 extends SchemaObject<string>,
	T2 extends string,
>(
	data:Exclude<T1, {'@context': string}>,
	context:T2 = 'https://schema.org' as T2,
) : T1 & {'@context': T2} {
	return Object.assign({}, data, {
		'@context': context,
	});
}

function withoutContext<T1 extends SchemaObject<string>>(
	data: T1 & {'@context': string},
) : T1 {
	const cloned:T1 & {'@context'?: string} = Object.assign({}, data);

	delete cloned['@context'];

	return cloned;
}

function QuantitativeValue(value: number): Schema.QuantitativeValue
{
	return generate<
		'QuantitativeValue',
		SchemaProperties.QuantitativeValue
	>('QuantitativeValue', {
		value,
	});
}

function ImageObject<
	T extends Schema.ImageObject<SchemaProperties.ImageObject>,
> (
	contentUrl: string,
	width: number,
	height: number,
	encodingFormat: SchemaProperties.mime_type,
	data?: SchemaProperties.ImageObjectOptional,
) : T {
	return generate<'ImageObject', T>(
		'ImageObject',
		Object.assign({}, data, {
			contentUrl,
			encodingFormat,
			width: QuantitativeValue(width),
			height: QuantitativeValue(height),
		}) as T,
	);
}

function WebSite<T1 extends SchemaProperties.WebSite>(data:T1) {
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
) : Schema.WebPage<typeof data> {
	return generate<'WebPage', typeof data>(
		'WebPage',
		Object.assign({}, data, {
			name,
		}),
	);
}

function Person<
	T1 extends SchemaProperties.Person,
>(
	name: string,
	data: T1,
) : Schema.Person<T1> {
	return generate<
		'Person',
		T1
	> (
		'Person',
		Object.assign({}, data, {
			name,
		}),
	);
}

function Organization<
	T1 extends SchemaProperties.Organization,
>(data: T1) {
	return generate('Organization', data);
}

function VoteAction<T1 extends SchemaProperties.VoteAction>(data:T1) {
	return generate('VoteAction', data);
}

function SocialMediaPosting<
	T1 extends SchemaProperties.SocialMediaPosting,
>(url:string, data:T1): Schema.SocialMediaPosting<T1> {
	return generate<'SocialMediaPosting', T1>(
		'SocialMediaPosting',
		Object.assign({}, data, {
			url,
		}),
	);
}

function VideoGame<T1 extends SchemaProperties.VideoGame> (
	data: T1,
): Schema.VideoGame<T1> {
	return generate('VideoGame', data);
}

function VideoGameSeries<T1 extends SchemaProperties.VideoGameSeries> (
	data:T1,
): Schema.VideoGameSeries<T1> {
	return generate('VideoGameSeries', data);
}

function Software<T1 extends SchemaProperties.Software> (
	data:T1,
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
