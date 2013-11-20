var vows = require('vows');
var assert = require('assert');
var distinguishable = require('../');

console.log(distinguishable.create(12));

vows.describe('distinguishable').addBatch({
    'when generating passwords': {
        'of negative length': {
            topic: function () { return distinguishable.create(-1); },

            'we get a zero-length string': function (topic) {
                assert.equal(topic.length, 0);
            }
        },

        'of zero length': {
            topic: function () { return distinguishable.create(0); },

            'we get a zero-length string': function (topic) {
                assert.equal(topic.length, 0);
            }
        },

        'of length 1': {
            topic: function () { return distinguishable.create(1); },

            'we get a string with one character only': function (topic) {
                assert.equal(topic.length, 1);
            }
        },

        'of length 123': {
            topic: function () { return distinguishable.create(123); },

            'we get a string with 123 characters': function (topic) {
                assert.equal(topic.length, 123);
            }
        }
    }
}).run();