// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// No Node.js APIs are available in this process because
// `nodeIntegration` is turned off. Use `preload.js` to
// selectively enable features needed in the rendering
// process.

console.log('Estoy en Renderer');
// window.postMessage({
// 	myField: 'myMessage',
// 	data: 123
// });

document.querySelector('button').addEventListener('click', () => {
	window.postMessage({
		myField: 'myMessage',
		data: 123
	});
});
