const gitUrl = "https://raw.githubusercontent.com/Frongus/000005/refs/heads/main/info.json"
const indexMainContainer = document.getElementById('indexMainContent')

document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    console.log('Running cordova-' + cordova.platformId + '@' + cordova.version);
    document.getElementById('deviceready').classList.add('ready');
}

loadItems()

async function loadItems() {
    fetch(gitUrl, {

    }).then(response => response.json()).then((data) => {
        console.log(data.item);
        const dataItems = data.item;
        dataItems.forEach(element => {
            console.log(element)
            const name = element.name;
            const linkUrl = element.weblink;
            const iconUrl = element.iconUrl;

            console.log({name, linkUrl, iconUrl})

            buildCard(name, linkUrl, iconUrl);
        });
    })
}

function buildCard(name, linkUrl, coverUrl) {
    var scrollItem = document.createElement('a');
    scrollItem.setAttribute('class', 'scrollItem');
    scrollItem.setAttribute('href', linkUrl)

    var container = document.createElement('div');
    container.setAttribute('class', 'container');

    var containerData = document.createElement('div');
    containerData.setAttribute('class', 'containerData');

    var nameElement = document.createElement('h2');
    nameElement.setAttribute('id', 'name');
    nameElement.appendChild(document.createTextNode(name));
    containerData.appendChild(nameElement);

    var coverImage = document.createElement('img');
    coverImage.setAttribute('src', coverUrl);
    coverImage.setAttribute('id', 'coverImage');
    containerData.appendChild(coverImage);

    var contentIdElement = document.createElement('p');
    contentIdElement.setAttribute('id', 'contentId');
    contentIdElement.appendChild(document.createTextNode(`Link: ${linkUrl}`));
    containerData.appendChild(contentIdElement);

    container.appendChild(containerData);
    scrollItem.appendChild(container);
    indexMainContainer.appendChild(scrollItem);

    return 'Card built';
}