import {default as coffee_stain} from './coffee-stain.js';
import {
	SchemaGenerators,
	SchemaObject,
	SchemaProperties,
} from '../SchemaTypes.js';

export type knowsAbout_satisfactory = {
	knowsAbout: [SchemaObject<'VideoGame'>, ...SchemaObject<any>[]],
};

export const satisfactory:SchemaProperties.VideoGame = {
	"name": "Satisfactory",
	'url': 'https://satisfactorygame.com/',
	"author": coffee_stain,
	"operatingSystem": "Windows",
	"applicationCategory": [
		"Game",
		"Factory Construction"
	]
};

export default SchemaGenerators.VideoGame<any>(Object.assign({}, satisfactory));
