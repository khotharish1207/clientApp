let protooPort = 4443;

if (window.location.hostname === 'test.mediasoup.org')
	protooPort = 4444;

export function getProtooUrl({ roomId, peerId, forceH264, forceVP9 })
{
	const hostname = window.location.hostname;
	// let url = `ws://localhost:${protooPort}/?roomId=${roomId}&peerId=${peerId}`;
	let url = `wss://test.mediasoup.org:4444/?roomId=${roomId}&peerId=${peerId}`;

	if (forceH264)
		url = `${url}&forceH264=true`;
	else if (forceVP9)
		url = `${url}&forceVP9=true`;

	return url;
}
