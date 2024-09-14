function rambleyEgg() {
	window.scrollTo({ top: 0, behavior: 'smooth' });
	
	document.getElementById('profileLogoLink').href='https://tenor.com/view/indigo-park-gif-27580131544399364'
	document.getElementById('profileLogo').src='https://media.tenor.com/9ou0DVD5SbwAAAAM/rambley-the-raccoon-indigo-park.gif'

	document.getElementById('text02').innerHTML='Average Rambley Addict'

	document.getElementById('rambleySwitch').innerHTML='Rambley the Raccoon'
	document.getElementById('rambleySwitch').onclick=''
	document.getElementById('rambleySwitch').style='cursor:text'
	document.getElementById('rambleySwitch').title='You can\'t leave your new best friend, Rambley!'

	document.getElementById('bottomQuote').innerHTML='"CONGRATULATIONS! You found ME! Don\'t I look adorable?" - <color style="color:rgb(90, 90, 90)">Rambley the Raccoon</color>'

	new Audio('resources/RAILROAD.mp3').play()
}