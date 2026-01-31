import type {
	Schema,
	SchemaObject,
	SchemaProperties,
} from './SchemaTypes.ts';

type QuantitativeValue = SchemaObject<'QuantitativeValue'> & {
	value: number,
};

type ImageObject<
	T extends SchemaProperties.ImageObject,
> = SchemaObject<'ImageObject'> & T;

type has_image<T extends SchemaProperties.ImageObject> = {
	image?: ImageObject<T>[]|ImageObject<T>,
};

type SubjectOfSubtypes = (
	| Schema.CreativeWorkSeries<SchemaProperties.CreativeWorkSeries>
	| Schema.VideoObject<SchemaProperties.VideoObject>
	| Schema.ClipObject<SchemaProperties.ClipObject>
	| Schema.SocialMediaPosting<SchemaProperties.SocialMediaPosting>
);

type SubjectOf = {
	subjectOf?: SubjectOfSubtypes[]|SubjectOfSubtypes,
};

type CreativeWorkSeries<
	T extends SchemaProperties.CreativeWorkSeries,
> = SchemaObject<'CreativeWorkSeries'> & T;

type VideoObject<
	T1 extends SchemaProperties.VideoObject,
> = SchemaObject<'VideoObject'> & T1;

type ClipObject<
	T1 extends SchemaProperties.ClipObject,
> = SchemaObject<'Clip'> & T1;

type SearchAction<
	T1 extends SchemaProperties.SearchAction,
> = SchemaObject<'SearchAction'> & T1;

type WebSite<
	T1 extends SchemaProperties.WebSite,
> = SchemaObject<'WebSite'> & T1;

type WebPage<
	T1 extends SchemaProperties.WebPage,
> = (
	& SchemaObject<'WebPage'>
	& T1
	& SubjectOf
	& Schema.has_image<SchemaProperties.ImageObject>
);

type Organization<
	T extends SchemaProperties.Organization,
> = SchemaObject<'Organization'> & T;

type Person<
	T1 extends SchemaProperties.Person,
> = (
	& SchemaObject<'Person'>
	& T1
	& SubjectOf
	& SchemaProperties.has_url
	& Schema.has_image<SchemaProperties.ImageObject>
);

type VoteAction<
	T1 extends SchemaProperties.VoteAction,
> = SchemaObject<'VoteAction'> & T1;

type SocialMediaPosting<
	T1 extends SchemaProperties.SocialMediaPosting,
> = SchemaObject<'SocialMediaPosting'> & T1;

type VideoGame<
	T1 extends SchemaProperties.VideoGame,
> = SchemaObject<'VideoGame'> & T1;

type VideoGameSeries<
	T1 extends SchemaProperties.VideoGameSeries,
> = SchemaObject<'VideoGameSeries'> & T1;

type Software<
	T1 extends SchemaProperties.Software,
> = SchemaObject<'Software'> & T1;

export type {
	QuantitativeValue,
	ImageObject,
	has_image,
	SubjectOfSubtypes,
	SubjectOf,
	CreativeWorkSeries,
	VideoObject,
	ClipObject,
	SearchAction,
	WebSite,
	WebPage,
	Organization,
	Person,
	VoteAction,
	SocialMediaPosting,
	VideoGame,
	VideoGameSeries,
	Software,
};
