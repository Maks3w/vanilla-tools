
require('./browser-polyfills');
// document.currentScript
// Date.now()
// HTMLElement.closest()
// HTMLElement.addEventListener
// HTMLElement.removeEventListener
// window.matchMedia
// Element.prototype.matchesSelector

require('classlist.js'); // https://developer.mozilla.org/es/docs/Web/API/Element/classList

var extend = require('nitro-tools/extend');

function _ (selector, source) {
  return source && typeof source === 'string' ?
		selector.querySelector(source) :
		(source || document).querySelector(selector);
}

_.noop = function (value) { return value; };
_.q = require('q-promise/no-native');

extend.extend(_, extend);

_.extend(_,
  require('nitro-tools/type'),
	require('nitro-tools/key'),
	require('nitro-tools/path')
);

_.extend(_, {
	animate: require('./deferred/animate'),
	wait: require('./deferred/wait')
});

_.extend(_, {
	ready: require('./fn/ready'),
	template: require('./fn/template'),
	template: require('./fn/once'),
	debounce: require('./fn/debounce')
});

_.extend(_,
  require('./utils/events'),
	// _.on(el, eventName, handler, useCapture)
	// _.off(el, eventName, handler, useCapture)
	// _.triggerEvent(element, eventName, data)

  require('./utils/dom')
  // _.create(tagName, attrs)
	// _.attr(el, name, value)
  // _.tmpClass(el, className, duration, cb)
);

_.extend(_, {
	normalize: require('./utils/normalize'),
	// _.touchDevice === true | false
	// _.isMac === true | false
	// _.isAndroid === true | false

	scroll: require('./utils/scroll/bundle') // scroll is not available until document is ready
	// _.scroll.on( handler, useCapture )
	// _.scroll.off( handler, useCapture )
	// _.scroll.top()
	// _.scroll.goto(value)
	// _.scroll.animateTo(value | HTMLElement, callback, duration): Promise
	// _,scroll.inAnimation === true | false
});

module.exports = _;
