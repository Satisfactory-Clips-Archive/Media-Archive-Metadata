import coffee_stain from './coffee-stain.ts';

import type {
	SchemaObject,
	SchemaProperties,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../SchemaTypes.ts';
import {
	SchemaGenerators,
// eslint-disable-next-line imports/no-relative-parent-imports
} from '../SchemaTypes.ts';

export type knowsAbout_satisfactory = {
	knowsAbout: [SchemaObject<'VideoGame'>, ...SchemaObject<string>[]],
};

export const satisfactory:SchemaProperties.VideoGame = {
	"name": "Satisfactory",
	'url': 'https://satisfactorygame.com/',
	"author": coffee_stain,
	"operatingSystem": "Windows",
	"applicationCategory": [
		"Game",
		"Factory Construction",
	],
};

export default SchemaGenerators.VideoGame<
	SchemaProperties.VideoGame
>(Object.assign(
	{},
	satisfactory,
));
