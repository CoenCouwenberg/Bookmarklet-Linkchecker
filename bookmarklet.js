(function () {
	const pageTags = document.getElementsByTagName("a");
	const checkLinks = [
		"schoenen.nl",
		"jurkenshoponline.nl",
		"meubelmooi.nl",
		"vloerkledenshoponline.nl",
		"vaatwasserwebshop.nl",
		"koelkastwebshop.nl",
		"wasmachinewebshop.nl",
	];

	let pageLinks = [];
	let filteredLinks = [];
	for (let i = 0; i < pageTags.length; i++) {
		let currentLink = pageTags[i].href;
		pageLinks.push(currentLink);

		if (currentLink.startsWith("http://")) currentLink = currentLink.substring(7);
		if (currentLink.startsWith("https://")) currentLink = currentLink.substring(8);
		if (currentLink.startsWith("www.")) currentLink = currentLink.substring(4);

		if (currentLink.includes("/")) {
			currentLink = currentLink.slice(0, currentLink.indexOf("/"));
		}

		filteredLinks.push(currentLink);
	}

	for (let i = 0; i < filteredLinks.length; i++) {
		const currentLink = filteredLinks[i];

		if (checkLinks.includes(currentLink)) {
			console.log(`Matching links: ${pageLinks[i]}`);
			pageTags[i].style.background = "green";

			const newDiv = document.createElement("div");

			const newContent = document.createTextNode(pageTags[i]);

			newDiv.appendChild(newContent);
			newDiv.style.zIndex = 999;
			newDiv.style.background = "white";

			document.body.prepend(newDiv);
		}
	}
});

// https://developer.mozilla.org/en-US/docs/Web/API/Document/createElement DIV
// https://mrcoles.com/bookmarklet/ Script converten naar Bookmarklet

// console.log("linkjes");
// links = document.getElementsByTagName("a");
// for (let i = 0; i < links.length; i++) {
// 	let link = [];
// 	let checkLinks = ["schoenen.nl", "https://lizzmedia.nl/"];
// 	link.push[links[i].href];

// 	if (link.includes(checkLinks) == true) {
// 		console.log(link);
// 		console.log(checkLinks);
// 	} else {
// 		console.log("No links found");
// 	}
// }

// links = document.getElementsByTagName("a");
// let checkLinks = ["schoenen.nl", "lizzmedia.nl"];

// let link = [];
// for (let i = 0; i < links.length; i++) {
// 	// console.log(typeof links[i]);
// 	// if (links[i].href.startsWith("http://")) links[i].href = links[i].href.substring(7);
// 	// if (links[i].href.startsWith("https://")) links[i].href = links[i].href.substring(8);
// 	// if (links[i].href.startsWith("www.")) links[i].href = links[i].href.substring(4);
// 	// if (links[i].href.includes("/")) links[i].href = links[i].href.slice(links[i].href.indexOf("/"), links[i].length);
// 	// console.log(links[i].href);
// 	// link.push(links[i].href);
// 	// let currentLink = links[i].href;

// 	// if (currentLink.startsWith("http://")) currentLink = currentLink.substring(7);
// 	// if (currentLink.startsWith("https://")) currentLink = currentLink.substring(8);
// 	// if (currentLink.startsWith("www.")) currentLink = currentLink.substring(4);
// 	// if (currentLink.includes("/"))
// 	// 	currentLink = currentLink.slice(currentLink.indexOf("/"), currentLink.length);
// 	// link.push(currentLink);

// 	link.push(links[i].href.replace(/(^\w+:|^)\/\//, ''));
// }
// // console.log(link);

// for (let i = 0; i < link.length; i++) {
// 	const element = link[i];

// 	if (checkLinks.includes(element)) {
// 		console.log("match: " + element);
// 	}
// }
