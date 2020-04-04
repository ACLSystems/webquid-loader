// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
console.log('Hola, estoy en el preload');
console.log(JSON.stringify(process.versions));

const  { ipcRenderer } = require('electron');
// process.once('loaded', () => {
// 	window.addEventListener('message', event => {
// 		const message = event.data;
// 		console.log(`Dentro de Loaded, recibiendo mensaje: ${JSON.stringify(message)}`);
// 		if(message.myField === 'myMessage') {
// 			ipcRenderer.send('response', message);
// 		}
// 	});
// });

window.addEventListener('message', event => {
	const message = event.data;
	console.log(`Recibiendo mensaje: ${JSON.stringify(message)}`);
	if(message.myField === 'myMessage') {
		ipcRenderer.send('response', message);
	}
});

window.addEventListener('DOMContentLoaded', () => {
	const replaceText = (selector, text) => {
		const element = document.getElementById(selector);
		if (element) element.innerText = text;
	};

	for (const type of ['chrome', 'node', 'electron']) {
		replaceText(`${type}-version`, process.versions[type]);
	}
});
