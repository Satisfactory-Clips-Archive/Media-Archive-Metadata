import type {
	Schema,
	SchemaObject,
	SchemaProperties,
} from './SchemaTypes.ts';


export function generate<
	T1 extends string,
	T2 extends object
>(
	type: T1,
	data: T2,
): SchemaObject<T1> & T2 {
	return Object.assign({}, data, {
		'@type': type as T1,
	}) as (SchemaObject<T1> & T2);
}

export function withContext<
	T1 extends SchemaObject<any>,
	T2 extends string,
>(
	data:Exclude<T1, {'@context': string}>,
	context:T2 = 'https://schema.org' as T2,
) : T1 & {'@context': T2} {
	return Object.assign({}, data, {
		'@context': context,
	});
}

export function withoutContext<T1 extends SchemaObject<any>>(
	data: T1 & {'@context': string}
) : T1 {
	const cloned:T1 & {'@context'?: string} = Object.assign({}, data);

	delete cloned['@context'];

	return cloned;
}

export function QuantitativeValue(value: number): Schema.QuantitativeValue
{
	return generate<
		'QuantitativeValue',
		SchemaProperties.QuantitativeValue
	>('QuantitativeValue', {
		value,
	});
}

export function ImageObject<
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
		}) as T
	);
}

export function WebSite<T1 extends SchemaProperties.WebSite>(data:T1) {
	return generate('WebSite', data);
}

export function WebPage<
	T1 extends SchemaProperties.WebPage,
>(
	name: string,
	data: T1 & Schema.SubjectOf & Schema.has_image<any>,
) : Schema.WebPage<T1> {
	return generate<'WebPage', T1 & Schema.SubjectOf & Schema.has_image<any>>(
		'WebPage',
		Object.assign({}, data, {
			name,
		})
	);
}

export function Person<
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
		})
	);
}

export function Organization<
	T1 extends SchemaProperties.Organization,
>(data: T1) {
	return generate('Organization', data);
}

export function VoteAction<T1 extends SchemaProperties.VoteAction>(data:T1) {
	return generate('VoteAction', data);
}

export function SocialMediaPosting<
	T1 extends SchemaProperties.SocialMediaPosting,
>(url:string, data:T1): Schema.SocialMediaPosting<T1> {
	return generate<'SocialMediaPosting', T1>(
		'SocialMediaPosting',
		Object.assign({}, data, {
			url,
		})
	);
}

export function VideoGame<T1 extends SchemaProperties.VideoGame> (
	data: T1,
): Schema.VideoGame<T1> {
	return generate('VideoGame', data);
}

export function VideoGameSeries<T1 extends SchemaProperties.VideoGameSeries> (
	data:T1,
): Schema.VideoGameSeries<T1> {
	return generate('VideoGameSeries', data);
}

export function Software<T1 extends SchemaProperties.Software> (
	data:T1,
): Schema.Software<T1> {
	return generate('Software', data);
}
