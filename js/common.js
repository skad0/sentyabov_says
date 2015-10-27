var phrases = [
	'Не пришей к пизде рукав',
	'Курочка в гнезде - яичко в пизде',
	'Стою на асфальте в лыжи обутый, то ли правда зима, то ли я ебанутый',
	'Как из пизды на лыжах',
	'Моя голова круглая, кроме тех мест где она не круглая',
	'Тю-тю-тю...',
	'Как по пизде ладошкой',
	'Инциатива ебет инициатора'
];

function getRandom(min, max)
{
  return Math.ceil(Math.random() * (max - min) + min);
}


$(document).ready(function(){
	$(document).on('click', '#refresh_phrase', function(e){
		e.preventDefault();
		var randombg = getRandom(1,5);
		$('body').css('background-image', 'url(images/bg/' + randombg + '.jpg)');
		$('#phrase').html(phrases[getRandom(0, phrases.length-1)]);
	});
});
