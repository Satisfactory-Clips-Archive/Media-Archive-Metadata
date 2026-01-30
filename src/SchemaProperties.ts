import type {
	Schema,
	SchemaObject,
} from './SchemaTypes.ts';

type mime_type = (
	| 'image/png'
	|'image/jpeg'
	|'image/webp'
	|'image/avif'
	|'image/svg+xml'
);

type QuantitativeValue = {
	value: number,
};

type has_url = {
	url?: [string, ...string[]]|string,
};

type ImageObjectOptional = has_url & {
	name?: string,
	description?: string,
	exampleOfWork?: Schema.SocialMediaPosting<any>|Schema.ImageObject<any>,
	license?: string,
	author?: Schema.Person<any>,
	relatedLink?: [string, ...string[]],
};

type ImageObject = ImageObjectOptional & {
	contentUrl: string,
	encodingFormat: mime_type,
	width: Schema.QuantitativeValue,
	height: Schema.QuantitativeValue,
};

type CreativeWorkSeries = has_url & {
	name: string,
	description?: string,
	startDate: string,
	endDate?: string,
};

type VideoObjectSpecifyUrlLater = Schema.has_image<any> & Exclude<{
	name: string,
	uploadDate: string,
	description?: string,
	creditText?: string,
}, {url: string}>;

type VideoObject = VideoObjectSpecifyUrlLater & {
	url: string,
};

type ClipObject = VideoObjectSpecifyUrlLater & {
	startOffset: number,
	endOffset: number,
	embedUrl: string,
	url: string,
};

type SearchAction = {
	target: string,
	'query-input': string,
};

type WebSite = {
	name: string,
	url: string,
	potentialAction?: Schema.SearchAction<any>,
	author?: Schema.Person<any>,
	about?: [SchemaObject<any>, ...SchemaObject<any>[]],
};

type WebPage = Schema.SubjectOf & Schema.has_image<any> & {
	alternateName?: [string, ...string[]]|string,
	description?: string,
	relatedLink?: [string, ...string[]]|string,
	about?: SchemaObject<string>[],
	url?: string,
};

type Organization = {
	name: string,
	url: string,
};

type Person = Schema.SubjectOf & Schema.has_image<any> & {
	alternateName?: [string, ...string[]]|string,
	honorificPrefix?: string,
	description?: string,
	jobTitle?: [string, ...string[]]|string,
	worksFor?: Schema.Organization<any>[]|Schema.Organization<any>,
	character?: Schema.Person<any>[]|Schema.Person<any>,
	knowsAbout?: [SchemaObject<any>, ...SchemaObject<any>[]],
	alumni?: [Schema.Organization<any>, ...Schema.Organization<any>[]],
	url?: [string, ...string[]]|string,
};

type VoteAction = {
	actionOption: [string, ...string[]],
	endTime: string,
};

type SocialMediaPosting = Schema.has_image<any> & has_url & {
	headline: string,
	datePublished: string,
	keywords?: [string, ...string[]],
	potentialAction?: Schema.VoteAction<any>[],
	author?: Schema.Person<any>[]|Schema.Person<any>,
};

type VideoGame = Schema.SubjectOf & {
	name: string,
	url: [string, ...string[]]|string,
	author: Schema.Person<any>|Schema.Organization<any>,
	operatingSystem: string,
	applicationCategory: [string, ...string[]],
	softwareVersion?: string,
};

type VideoGameSeries = Schema.SubjectOf & Schema.has_image<any> & {
	name: string,
};

type Software = Schema.SubjectOf & Schema.has_image<any> & {
	name: string,
	url: [string, ...string[]]|string,
	applicationCategory: [string, ...string[]],
	author: Schema.Person<any>|Schema.Organization<any>,
};

export type {
	mime_type,
	QuantitativeValue,
	has_url,
	ImageObjectOptional,
	ImageObject,
	CreativeWorkSeries,
	VideoObjectSpecifyUrlLater,
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
