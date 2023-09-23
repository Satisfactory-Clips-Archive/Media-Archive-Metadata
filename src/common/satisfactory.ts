import {default as coffee_stain} from './coffee-stain.js';
import {
	SchemaGenerators,
	SchemaProperties,
} from '../SchemaTypes.js';

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
