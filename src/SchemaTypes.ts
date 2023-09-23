


export declare type SchemaObject<T extends string> = {
    '@context'?: 'https://schema.org',
    '@type': T,
};

export namespace SchemaProperties
{
    export type mime_type = 'image/png'|'image/jpeg'|'image/webp'|'image/avif'|'image/svg+xml';

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

    export type ClipObject = SchemaProperties.VideoObjectSpecifyUrlLater & {
        startOffset: number,
        endOffset: number,
        embedUrl: string,
        url: string,
    };

    export type WebPage = Schema.SubjectOf & Schema.has_image<any> & {
        alternateName?: string[]|string,
        description?: string,
        relatedLink?: string[]|string,
        about?: SchemaObject<string>[],
    };

    export type Organization = {
        name: string,
        url: string,
    };

    export type Person = Schema.SubjectOf & Schema.has_image<any> & {
        alternateName?: string[]|string,
        description?: string,
        jobTitle?: string[]|string,
        worksFor?: Schema.Organization<any>[]|Schema.Organization<any>,
        character?: Schema.Person<any>[]|Schema.Person<any>,
    };

    export type SocialMediaPosting<
        T1 extends SchemaProperties.ImageObject,
		T2 extends SchemaProperties.Person,
    > = Schema.has_image<T1> & has_url & {
        headline: string,
        datePublished: string,
        keywords?: [string, ...string[]],
        potentialAction?: {
            '@type': 'VoteAction',
            actionOption: [string, ...string[]],
            endTime: string,
        }[],
		author?: T2[]|T2,
    };
}

export namespace Schema
{
    export type QuantitativeValue = SchemaObject<'QuantitativeValue'> & {
        value: number,
    };

    export type ImageObject<T extends SchemaProperties.ImageObject> = SchemaObject<'ImageObject'> & T;

    export type has_image<T extends SchemaProperties.ImageObject> = {
        image?: ImageObject<T>[]|ImageObject<T>,
    };

    export type SubjectOfSubtypes = Schema.CreativeWorkSeries<any> | Schema.VideoObject<any> | Schema.ClipObject<any> | Schema.SocialMediaPosting<any>;

    export type SubjectOf = {
        subjectOf?: SubjectOfSubtypes[]|SubjectOfSubtypes,
    };

    export type CreativeWorkSeries<T extends SchemaProperties.CreativeWorkSeries> = SchemaObject<'CreativeWorkSeries'> & T;

    export type VideoObject<
        T1 extends SchemaProperties.VideoObject,
    > = SchemaObject<'VideoObject'> & T1;

    export type ClipObject<
        T1 extends SchemaProperties.ClipObject,
    > = SchemaObject<'Clip'> & T1;

    export type WebPage<
        T1 extends SchemaProperties.WebPage
    > = SchemaObject<'WebPage'> & T1 & SubjectOf & Schema.has_image<any>;

    export type Organization<T extends SchemaProperties.Organization> = SchemaObject<'Organization'> & T;

    export type Person<
        T1 extends SchemaProperties.Person,
    > = SchemaObject<'Person'> & T1 & SubjectOf & SchemaProperties.has_url & Schema.has_image<any>;

	export type SocialMediaPosting<
		T1 extends SchemaProperties.SocialMediaPosting<any, any>,
	> = SchemaObject<'SocialMediaPosting'> & T1;
}

export namespace SchemaGenerators
{
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

    export function QuantitativeValue(value: number): Schema.QuantitativeValue
    {
        return generate<'QuantitativeValue', SchemaProperties.QuantitativeValue>('QuantitativeValue', {
            value,
        });
    }

    export function ImageObject<T extends Schema.ImageObject<SchemaProperties.ImageObject>> (
        contentUrl: string,
        width: number,
        height: number,
        encodingFormat: SchemaProperties.mime_type,
        data?: SchemaProperties.ImageObjectOptional,
    ) : T {
        return SchemaGenerators.generate<'ImageObject', T>(
            'ImageObject',
            Object.assign({}, data, {
                contentUrl,
                encodingFormat,
                width: SchemaGenerators.QuantitativeValue(width),
                height: SchemaGenerators.QuantitativeValue(height),
            }) as T
        );
    }

    export function WebPage<
        T1 extends SchemaProperties.WebPage,
    >(
        name: string,
        data: T1 & Schema.SubjectOf & Schema.has_image<any>,
    ) : Schema.WebPage<T1> {
        return SchemaGenerators.generate<'WebPage', T1 & Schema.SubjectOf & Schema.has_image<any>>(
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
        return SchemaGenerators.generate<
            'Person',
            T1
        > (
            'Person',
            Object.assign({}, data, {
                name,
            })
        );
    }

    export function SocialMediaPosting<
        T1 extends SchemaProperties.SocialMediaPosting<any, any>,
    >(url:string, data:T1): Schema.SocialMediaPosting<T1> {
        return SchemaGenerators.generate<'SocialMediaPosting', T1>(
            'SocialMediaPosting',
            Object.assign({}, data, {
                url,
            })
        );
    }
}
