var Modifier = require('famous/core/Modifier');
var Surface = require('famous/core/Surface');
var View = require('famous/core/View');

var Card = require('famous-cards/Card');

ExampleCard = function (options) {
    Card.apply(this, arguments);

    var surface = new Surface({
        content: '<h1>' + 'Card ' + options._id + '</h1>',
        classes: ['card']
    });
    this.add(surface);

    // Need to pipe the events out for the card scrollview.
    surface.pipe(this._eventOutput);
};

ExampleCard.prototype = Object.create(Card.prototype);
ExampleCard.prototype.constructor = ExampleCard;

/**
 * Called when the card is transitioning from small to large or large to small.
 * @param progress Scale of the card between [0, 100] (approximately).
 */
ExampleCard.prototype._progress = function (progress) {
};

ExampleCard.prototype.getSize = function () {
    // add 5 pixels for item spacing
    return [window.innerWidth + 5, undefined]
};