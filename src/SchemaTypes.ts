export * as Schema from './Schema.ts';
export * as SchemaProperties from './SchemaProperties.ts';
export * as SchemaGenerators from './SchemaGenerators.ts';

export type SchemaObject<T extends string> = {
	'@context'?: 'https://schema.org',
	'@type': T,
};
