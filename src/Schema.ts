import type {
	Schema,
	SchemaObject,
	SchemaProperties,
} from './SchemaTypes.ts';

export type QuantitativeValue = SchemaObject<'QuantitativeValue'> & {
	value: number,
};

export type ImageObject<
	T extends SchemaProperties.ImageObject,
> = SchemaObject<'ImageObject'> & T;

export type has_image<T extends SchemaProperties.ImageObject> = {
	image?: ImageObject<T>[]|ImageObject<T>,
};

export type SubjectOfSubtypes = (
	| Schema.CreativeWorkSeries<any>
	| Schema.VideoObject<any>
	| Schema.ClipObject<any>
	| Schema.SocialMediaPosting<any>
);

export type SubjectOf = {
	subjectOf?: SubjectOfSubtypes[]|SubjectOfSubtypes,
};

export type CreativeWorkSeries<
	T extends SchemaProperties.CreativeWorkSeries,
> = SchemaObject<'CreativeWorkSeries'> & T;

export type VideoObject<
	T1 extends SchemaProperties.VideoObject,
> = SchemaObject<'VideoObject'> & T1;

export type ClipObject<
	T1 extends SchemaProperties.ClipObject,
> = SchemaObject<'Clip'> & T1;

export type SearchAction<
	T1 extends SchemaProperties.SearchAction,
> = SchemaObject<'SearchAction'> & T1;

export type WebSite<
	T1 extends SchemaProperties.WebSite,
> = SchemaObject<'WebSite'> & T1;

export type WebPage<
	T1 extends SchemaProperties.WebPage
> = SchemaObject<'WebPage'> & T1 & SubjectOf & Schema.has_image<any>;

export type Organization<
	T extends SchemaProperties.Organization,
> = SchemaObject<'Organization'> & T;

export type Person<
	T1 extends SchemaProperties.Person,
> = (
	& SchemaObject<'Person'>
	& T1
	& SubjectOf
	& SchemaProperties.has_url
	& Schema.has_image<any>
);

export type VoteAction<
	T1 extends SchemaProperties.VoteAction,
> = SchemaObject<'VoteAction'> & T1;

export type SocialMediaPosting<
	T1 extends SchemaProperties.SocialMediaPosting,
> = SchemaObject<'SocialMediaPosting'> & T1;

export type VideoGame<
	T1 extends SchemaProperties.VideoGame,
> = SchemaObject<'VideoGame'> & T1;

export type VideoGameSeries<
	T1 extends SchemaProperties.VideoGameSeries,
> = SchemaObject<'VideoGameSeries'> & T1;

export type Software<
	T1 extends SchemaProperties.Software,
> = SchemaObject<'Software'> & T1;
