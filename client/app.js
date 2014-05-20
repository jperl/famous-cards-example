require('famous-polyfills'); // Add polyfills
require('famous/core/famous'); // Add the default css file

// Include all the famous dependencies.
var Engine = require('famous/core/Engine');
var Modifier = require('famous/core/Modifier');
var RenderNode = require('famous/core/RenderNode');

var MouseSync = require('famous/inputs/MouseSync');
var TouchSync = require('famous/inputs/TouchSync');
var ScrollSync = require('famous/inputs/ScrollSync');
var GenericSync = require('famous/inputs/GenericSync');
GenericSync.register({
    mouse: MouseSync,
    touch: TouchSync,
    scroll: ScrollSync
});

var ImageSurface = require('famous/surfaces/ImageSurface');

var CardScrollview = require('famous-cards/CardScrollview');

// Add the background famous image
var backgroundNode = new RenderNode(new Modifier({
    origin: [.5, .2]
}));
backgroundNode.add(new ImageSurface({
    size: [200, 200],
    content: 'famous_logo.png'
}));

// Create the card scrollview.
var cards = new CardScrollview();

//Add 10 example cards.
for (var i = 0; i < 10; i++) {
    var card = new ExampleCard({
        _id: i
    });
    cards.addCard(card);
}

// create the main context
var mainContext = Engine.createContext();
mainContext.add(backgroundNode);
mainContext.add(cards);