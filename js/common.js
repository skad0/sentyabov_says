var phrases = [
	'Не пришей к пизде рукав',
	'Курочка в гнезде - яичко в пизде',
	'Стою на асфальте в лыжи обутый, то ли правда зима, то ли я ебанутый',
	'Как из пизды на лыжах',
	'Моя голова круглая, кроме тех мест где она не круглая',
	'Тю-тю-тю...',
	'Как по пизде ладошкой',
	'Инциатива ебет инициатора',
	'Меня нет в скайпе, потому что я здесь сижу',
	'Зачем дураку стеклянный хуй?',
	'Чего хуем груши околачивать?',
	'Думай о шахматах',
	'Сливной бочок как из учебника по физике',
	'Что кушал что радио слушал',
	'Парашют в подтяжки и готовьтесь к катапультированию',
	'Сатурну больше не наливать',
	'Выпьешь полбутылки - яйца на затылке',
	'Не хочешь срать - не мучай жопу'
];

function getRandom(min, max) {
	return Math.ceil(Math.random() * (max - min) + min);
}

function getNextRandomItem(array, prev) {
	var item;

	do {
		item = array[getRandom(0, array.length - 1)];
	} while (item === prev);

	return item;
}

function loadImages(images) {
	images.forEach(function(src) {
		var image = new Image();
		image.src = src;
	});
}

var imagesCount = 13;
var images = (Array.apply(null, Array(13))).map(function(el, index) {
	return 'images/bg/' + (index + 1) + '.jpg';
});

window.onload = function() {
	loadImages(images);

	var action = document.getElementById('refresh_phrase');
	var phraseContainer = document.getElementById('phrase');
	var prevBg = '';
	var prevPhrase = '';

	function onActionClick(e) {
		e.preventDefault();

		var bg = getNextRandomItem(images, prevBg);
		var phrase = getNextRandomItem(phrases, prevPhrase);

		prevBg = bg;
		prevPhrase = phrase;

		document.body.style['background-image'] = 'url(' + bg + ')';
		phraseContainer.innerText = phrase;
	}
	if (window.PointerEvent) {
		action.addEventListener('pointerdown', onActionClick);
	} else {
		action.addEventListener('click', onActionClick);
	}
};
