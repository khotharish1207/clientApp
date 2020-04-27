let mediaQueryDetectorElem;

export function initialize()
{
	// Media query detector stuff.
	mediaQueryDetectorElem =
		document.getElementById('harish-chat-room-media-query-detector');

	return Promise.resolve();
}

export function isDesktop()
{
	return Boolean(mediaQueryDetectorElem.offsetParent);
}

export function isMobile()
{
	return !mediaQueryDetectorElem.offsetParent;
}
