import type {
	Schema,
	SchemaObject,
} from './SchemaTypes.ts';

export type mime_type = (
	| 'image/png'
	|'image/jpeg'
	|'image/webp'
	|'image/avif'
	|'image/svg+xml'
);

export type QuantitativeValue = {
	value: number,
};

export type has_url = {
	url?: [string, ...string[]]|string,
};

export type ImageObjectOptional = has_url & {
	name?: string,
	description?: string,
	exampleOfWork?: Schema.SocialMediaPosting<any>|Schema.ImageObject<any>,
	license?: string,
	author?: Schema.Person<any>,
	relatedLink?: [string, ...string[]],
};

export type ImageObject = ImageObjectOptional & {
	contentUrl: string,
	encodingFormat: mime_type,
	width: Schema.QuantitativeValue,
	height: Schema.QuantitativeValue,
};

export type CreativeWorkSeries = has_url & {
	name: string,
	description?: string,
	startDate: string,
	endDate?: string,
};

export type VideoObjectSpecifyUrlLater = Schema.has_image<any> & Exclude<{
	name: string,
	uploadDate: string,
	description?: string,
	creditText?: string,
}, {url: string}>;

export type VideoObject = VideoObjectSpecifyUrlLater & {
	url: string,
};

export type ClipObject = VideoObjectSpecifyUrlLater & {
	startOffset: number,
	endOffset: number,
	embedUrl: string,
	url: string,
};

export type SearchAction = {
	target: string,
	'query-input': string,
};

export type WebSite = {
	name: string,
	url: string,
	potentialAction?: Schema.SearchAction<any>,
	author?: Schema.Person<any>,
	about?: [SchemaObject<any>, ...SchemaObject<any>[]],
};

export type WebPage = Schema.SubjectOf & Schema.has_image<any> & {
	alternateName?: [string, ...string[]]|string,
	description?: string,
	relatedLink?: [string, ...string[]]|string,
	about?: SchemaObject<string>[],
	url?: string,
};

export type Organization = {
	name: string,
	url: string,
};

export type Person = Schema.SubjectOf & Schema.has_image<any> & {
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

export type VoteAction = {
	actionOption: [string, ...string[]],
	endTime: string,
};

export type SocialMediaPosting = Schema.has_image<any> & has_url & {
	headline: string,
	datePublished: string,
	keywords?: [string, ...string[]],
	potentialAction?: Schema.VoteAction<any>[],
	author?: Schema.Person<any>[]|Schema.Person<any>,
};

export type VideoGame = Schema.SubjectOf & {
	name: string,
	url: [string, ...string[]]|string,
	author: Schema.Person<any>|Schema.Organization<any>,
	operatingSystem: string,
	applicationCategory: [string, ...string[]],
	softwareVersion?: string,
};

export type VideoGameSeries = Schema.SubjectOf & Schema.has_image<any> & {
	name: string,
};

export type Software = Schema.SubjectOf & Schema.has_image<any> & {
	name: string,
	url: [string, ...string[]]|string,
	applicationCategory: [string, ...string[]],
	author: Schema.Person<any>|Schema.Organization<any>,
};
