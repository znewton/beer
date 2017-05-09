var greetings = ["In Dog Beers, I've Only Had One", "Mmmm, Beeer", "It's Beer:30!", "Good Day for a Beer", "Save Water, Drink Beer", "This Guy Needs a Beer"];

var beers = [
	// {
	// 	label: 'Seattle Semi-Sweet',
	// 	style: 'Cider',
	// 	description: 'A light, crisp cider with just a touch of sweetness. Honey in color with notes of bergamot orange, lemon and apple, this refreshing cider reveals hints of citrus and cinnamon on the palate.',
	// 	site: 'http://www.seattlecidercompany.com/',
	// 	img: 'img/seattleCiderLogo.png',
	// 	abv: 6.5,
	// 	ibu: null,
	// 	srm: null,
	// 	brix: 2.6
	// },
	{
		label:'Lake Monster Empty Rowboat',
		style: 'IPA',
		description: 'Brewed for the hop-head in all of us, our India Pale Ale is made with the finest American malts and a unique blend of classic and new American hops. It has a firm bitterness, intense citrus-hop aroma, and enough flavor to knock you overboard.',
		site: 'http://www.lakemonsterbrewing.com/our-beers/',
		img: 'img/lakeMonsterLogo.png',
		abv: 6.9,
		ibu: 80,
		srm: null,
		brix: null
	},
	{
		label:'Able First Light',
		style: 'IPA',
		description: 'Juicy and clean, with a slightly sweet finish',
		site: 'http://ablebeer.com/firstlight/',
		img: 'img/ableLogo.png',
		abv: 6.0,
		ibu: 60,
		srm: null,
		brix: null
	},
	{
		label:'Insight Trollway Citrus',
		style: 'IPA',
		description: 'Bitter and balanced. A West Coast style IPA. Brilliant bouquet of grapefruit and tropical fruit on the nose with hints of peach and lemon zest',
		site: 'http://www.insightbrewing.com/beers/#troll-way-ipa',
		img: 'img/InsightTrollWay.gif',
		abv: 7.0,
		ibu: 75,
		srm: null,
		brix: null
	},
	{
		label:'Insight Hell Chicken',
		style: 'Pale Ale',
		description: 'A delicately hopped pale ale brewed with Yuzu fruit from Japan, which has notes of both robust grapefruit citrus and mandarin oranges',
		site: 'http://www.insightbrewing.com/beers/#hell-chicken-pale-ale',
		img: 'img/insightHellChicken.gif',
		abv: 5.5,
		ibu: 35,
		srm: null,
		brix: null
	},
	// {
	// 	label:'Bent Paddle Cold Press',
	// 	style: 'Black Ale',
	// 	description: 'Our Bent Paddle Black infused with fresh Duluth Coffee Co. “Crazy Juice” cold press coffee – top o’ the morning to ya',
	// 	site: 'http://www.bentpaddlebrewing.com/beer/specialty-beers.php',
	// 	img: 'img/bentPaddleLogo.png',
	// 	abv: 6.0,
	// 	ibu: 34,
	// 	srm: null,
	// 	brix: null
	// },
	{
		label:'Bent Paddle 14&deg; ESB',
		style: 'Amber Ale',
		description: 'Our well rounded approach to the classic British Ale. There’s middle of the road, and there’s middle of the river. And if there’s one thing that’s important in the middle of the river – it’s balance. Our ESB is incredibly well balanced with a slight toasted malt flavor, traditional British hop accents with just a hint of pine and citrus from the unexpected Amarillo / Ahtanum dry-hop',
		site: 'http://www.bentpaddlebrewing.com/beer/flagship-beers.php',
		img: 'img/bentPaddleLogo.png',
		abv: 5.6,
		ibu: 32,
		srm: null,
		brix: null
	},
	// {
	// 	label:'Fulton Batch 300',
	// 	style: 'Mosaic IPA',
	// 	description: "Originally brewed as a one-off in celebration of the 300th batch at our original downtown Minneapolis brewery, this West Coast IPA was so well received we had to make it available year-round. It's built on a base of Pilsner malt and heavily hopped with Mosaic, one of our favorite -- and unfortunately nearly impossible to procure -- hop varieties. At 74 IBU and 7% ABV, 300 is pure hop candy",
	// 	site: 'http://www.fultonbeer.com/beer/300#',
	// 	img: 'img/logo--fulton.svg',
	// 	abv: 6.9,
	// 	ibu: 74,
	// 	srm: 7,
	// 	brix: null
	// },
	{
		label:'Bad Weather Ominous',
		style: 'Double Brown Ale',
		description: 'Clouds grow dark, the wind picks up, a chill sets in -- the weather is not looking good. Thankfully, our winter seasonal OMINOUS is the perfect beer for this situation. Warming from the inside out, it’s a good reason to stay indoors. At 7.5% abv, this Midwest Warmer has layers to stand up to the most frigid of winter nights or rain-soaked spring days. American, English and Belgian malts come together to satisfy the soul with a rich, nutty, roasted flavors. Dark candi sugar brings out hints of dates, raisins, plum and chocolate. OMINOUS is a dark storm of a beer - big, intense and something to keep your eye on.',
		site: 'http://www.badweatherbrewery.com/packaged-beers/',
		img: 'img/badWeatherLogo.png',
		abv: 7.5,
		ibu: 40,
		srm: null,
		brix: null
	},
	// {
	// 	label:'F-Town Mocha',
	// 	style: 'Stout',
	// 	description: 'This full-flavored brew blends hints of chocolate with rich coffee notes to create a delicious mocha flavor',
	// 	site: 'http://www.ftownbeer.com/ftown/our-beer/seasonal-small-batches/mocha-stout/',
	// 	img: 'img/ftownLogo.png',
	// 	abv: 4.7,
	// 	ibu: 15,
	// 	srm: null,
	// 	brix: null
	// },
	{
		label:'Bent Maroon and Bolder',
		style: 'Double IPA',
		description: 'Maroon & Bold is back and bolder than ever! This 5th anniversary of M&B is loaded with MN Hops and malt lending hints of citrus, hay, and sweet toasted marshmallows. Dank, spicy, smooth & malty, yet packs enough hoppy brightness to get you through even the darkest Minnesota Winter.',
		site: 'http://www.bentbrewstillery.com/seasonal-brews/',
		img: 'img/MaroonAndBolder.PNG',
		abv: 9.5,
		ibu: '100+',
		srm: null,
		brix: null
	},
	{
		label:'Nordic Blonde',
		style: 'Amber Blonde Ale',
		description: 'This is a clean, crisp, delicately balanced beer with subdued sweetness and a pleasantly refreshing tang in the finish. Because of the low hop bitterness and dry, light body, this beer is easily mistaken for a lager or light beer. These qualities make it a great summertime beverage. This beer is brewed using our local pure water without any additives.',
		site: 'http://www.bentbrewstillery.com/year-round-brews/',
		img: 'img/NordicBlonde.PNG',
		abv: 5.7,
		ibu: 27,
		srm: null,
		brix: null
	}
];

renderList(beers);
document.addEventListener("DOMContentLoaded", function(event) {
	document.getElementById('greeting').innerHTML = greetings[Math.floor(Math.random()*greetings.length)];
	var beer_buttons = document.getElementsByClassName('beer_button');
	for (var bb = 0; bb < beer_buttons.length; bb++){
		beer_buttons[bb].addEventListener('click', function(e){
			toggleCollapse(e.target);
		});
	}

});


function renderList(beerList) {
	var listElement = document.getElementById('beer_list');
	var beer = null;
	for (var i = 0; i < beerList.length; i++){
		beer = beers[i];
		var li = document.createElement('li');
		li.className = 'beer_button';
		var img = document.createElement('img');
		img.setAttribute('src', beer.img);
		li.appendChild(img);

		var div = document.createElement('div');
		div.className = 'beer_info collapsed';
		var closer = document.createElement('span');
		closer.className = 'closer';
		closer.innerHTML = '&#x2715;';
		closer.addEventListener('click',function(e){
			var parent = e.target.parentNode;
			parent.classList.add('collapsed');
		});
		div.appendChild(closer);
		var label = document.createElement('span');
		label.innerHTML=beer.label;
		label.className = 'beer_label';
		div.appendChild(label);
		var description = document.createElement('div');
		description.appendChild(document.createTextNode(beer.description));
		div.appendChild(description);
		var link = document.createElement('a');
		link.href = beer.site;
		link.innerHTML = beer.site.replace('http://', '').replace(/\/.*/, '');
		div.appendChild(link);
		var nums = document.createElement('div');
		nums.className = 'stats';
		if(beer.abv) {
			var abv = document.createElement('span');
			abv.innerHTML = 'ABV: ' + beer.abv + '%';
			nums.appendChild(abv);
		}
		if(beer.ibu){
			var ibu = document.createElement('span');
			ibu.innerHTML = 'IBU: ' + beer.ibu;
			nums.appendChild(ibu);
		}
		if(beer.srm){
			var srm = document.createElement('span');
			srm.innerHTML = 'SRM: ' + beer.srm;
			nums.appendChild(srm);
		}
		if(beer.brix){
			var brix = document.createElement('span');
			brix.innerHTML = 'BRIX: '+beer.brix;
			nums.appendChild(brix);
		}
		div.appendChild(nums);
		li.appendChild(div);
		listElement.appendChild(li);
	}
}

function toggleCollapse(elem){
	var collapse = elem.getElementsByClassName('beer_info')[0];
	if(collapse && collapse.classList.contains('collapsed')){
		collapse.classList.remove('collapsed');
	}
}
