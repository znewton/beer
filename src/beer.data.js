import BentPaddleBrewing from './img/BentPaddleBrewing.png';
// import LakeMonsterBrewing from './img/LakeMonsterBrewing.png';
// import abc from './img/LakeMonsterBrewing.png';
import SurlyBrewing from './img/SurlyBrewing.png';
import BentBrewstillery from './img/BentBrewstillery.png';
import FTownBrewing from './img/FTownBrewing.png';
import FlatEarthBrewing from './img/FlatEarthBrewing.png';
import OmniBrewing from './img/OmniBrewing.png';
import FlipSwitchIPA from './img/FlipSwitchIPA.png';
import InsightBrewing from './img/InsightBrewing.png';
import UrbanGrowlerBrewing from './img/UrbanGrowlerBrewing.jpeg';

/**
 {
    label: '',
    style: '',
    description: '',
    site: '',
    img: abc,
    stats: {
      abv: null,
      ibu: null,
      srm: null,
      brix: null
    }
 }
 */

export default [
  {
     label: 'Surly Xtra Citra',
     style: 'Pale Ale',
     description: 'Bursting with Citra hop flavor and tropical, citrusy notes, this sessionable pale ale showcases Surly’s bright side.',
     site: 'http://surlybrewing.com/beer/xtra-citra/',
     img: SurlyBrewing,
     stats: {
       malt: '2-Row, Weyermann Acidulate, Gambrinus Honey, Simpsons Golden Naked Oats',
       hops: 'Warrior (bittering), Citra',
       yeast: 'English Ale',
       color: 'Golden',
       og: 1.05,
       abv: null,
       ibu: null,
       srm: null,
       brix: null
     }
  },
  {
     label: 'Bent Nordic Blonde',
     style: 'Amber Blonde Ale',
     description: 'This is a clean, crisp, delicately balanced beer with subdued sweetness and a pleasantly refreshing tang in the finish. Because of the low hop bitterness and dry, light body, this beer is easily mistaken for a lager or light beer. These qualities make it a great anytime beverage. This beer is brewed using our local pure water without any additives. This beer was our very first recipe. It was our introduction into craft beer. We brewed what we wanted to drink, and this quickly became a favorite among our friends and family who weren’t ready for the more brutal styles on the Bent Brewstillery beer menu. This beer is best when fresh.',
     site: 'http://www.bentbrewstillery.com/year-round-brews/',
     img: BentBrewstillery,
     stats: {
       abv: 5.7,
       ibu: 27,
       srm: null,
       brix: null
     }
  },
  {
     label: 'F-Town Indian Pale Ale',
     style: 'IPA',
     description: 'Three hops and three malts come together in perfect harmony to create our well-balanced IPA. The hints of spice from our fragrant hop blend and the full-bodied flavor of caramel malt give hop enthusiasts what they crave.',
     site: 'http://www.ftownbeer.com/ftown/our-beer/core-beers/india-pale-ale/',
     img: FTownBrewing,
     stats: {
       abv: 6.8,
       ibu: 110,
       srm: null,
       brix: null
     }
  },
  {
     label: 'Surly Todd the Axe Man',
     style: 'IPA',
     description: 'Our version of the West Coast Style IPA first brewed in collaboration with Amager Brewery in Denmark. Brewed with one malt, Golden Promise from the UK, with Citra and Mosaic hops. If you think Todd is a good brewer, you should hear him play his axe (guitar)! Named by Amager’s marketing director Henrik Papsø.',
     site: 'http://surlybrewing.com/beer/todd-the-axe-man/',
     img: SurlyBrewing,
     stats: {
       malt: 'Golden Promise',
       hops: 'Citra, Mosaic',
       abv: null,
       ibu: null,
       srm: null,
       brix: null
     }
  },
  {
     label: 'Flat Earth Angry Planet',
     style: 'Pale Ale',
     description: 'This is what happens when Mother Earth gets angry. Angry Planet a crisp, clean, satisfying American Pale Ale, proudly brewed with American malt, American hops, American yeast, and of course, American Saint Paul water. We might as well mention that it is also fermented and aged in American made tanks. This is our tribute to America and we have loaded it with Cascade hops, giving it a wonderful citrus flavor and aroma that perfectly compliments the American malty sweetness. Enjoy while watching your favorite baseball team, Bald Eagle observing, or picking up litter.',
     site: 'http://flatearthbrewing.com/beer.php',
     img: FlatEarthBrewing,
     stats: {
       og: 1.060,
       abv: 6.0,
       ibu: 48,
       srm: 14,
       brix: null
     }
  },
  {
     label: 'Omni Muddy Runner',
     style: 'Coconut Porter',
     description: 'Toasted coconut in the fermenter give this Porter a coconut nose and sweet coconut finish that is not overbearing. All combining with a light body to make this so much more than a dessert beer.',
     site: 'https://www.omnibrewing.com/beer',
     img: OmniBrewing,
     stats: {
       abv: 5.8,
       ibu: 25,
       srm: null,
       brix: null
     }
  },
  {
     label: 'Bent Paddle 14 Degree ESB',
     style: 'Extra Special Amber Ale',
     description: 'Our well rounded approach to the classic British Ale. There’s middle of the road, and there’s middle of the river. And if there’s one thing that’s important in the middle of the river – it’s balance. Our ESB is incredibly well balanced with a slight toasted malt flavor, traditional British hop accents with just a hint of pine and citrus from the unexpected Amarillo / Ahtanum dry-hop.',
     site: 'http://www.bentpaddlebrewing.com/beer/flagship-beers.php',
     img: BentPaddleBrewing,
     stats: {
       abv: 5.6,
       ibu: 32,
       srm: null,
       brix: null
     }
  },
  {
     label: 'Omni Hopfull',
     style: 'IPA',
     description: 'Balanced for an IPA, deceptively smooth for 80 IBUs and three different kinds of hops (Simcoe, Amarillo and Cascade) used in this recipe. The brewers hopping technique eliminates any chance of bitterness lingering too long. Hop pines are earthy, citrusy, pine.',
     site: 'https://www.omnibrewing.com/beer',
     img: OmniBrewing,
     stats: {
       abv: 6.0,
       ibu: 80,
       srm: null,
       brix: null
     }
  },
  {
     label: 'Tin Whiskers Flip Switch',
     style: 'American IPA',
     description: 'An American IPA with deep citrus and grapefruit aroma, malty backbone and a relaxed bitterness.',
     site: 'https://twbrewing.com/beer/flip-switch-ipa',
     img: FlipSwitchIPA,
     stats: {
       abv: 6.2,
       ibu: 63.9,
       og: 1.063,
       fg: 1.016,
       srm: null,
       brix: null
     }
  },
  {
     label: 'Insight Brewing Hell Chicken (Growler)',
     style: 'Pale Ale & Yuzu',
     description: 'A delicately hopped pale ale brewed with Yuzu fruit from Japan, which has notes of both robust grapefruit citrus and mandarin oranges.',
     site: 'http://www.insightbrewing.com/beers/',
     img: InsightBrewing,
     stats: {
       notes: 'Grapefruit, Mandarin Orange, Delicate Hops',
       abv: 5.5,
       ibu: null,
       srm: null,
       brix: null
     }
  },
  {
     label: 'Insight Brewing Dankbot (Growler)',
     style: 'IPA',
     description: 'We’ve taken this IPA up a notch with a ton of bitterness and hoppy goodness. With a medium to light malt body, the focus of this beer is hops to truly let them be the hero. A layer of earthy and dank hops on top of bold citrus characters make this beer our hoppiest to date.',
     site: 'http://www.insightbrewing.com/beers/',
     img: InsightBrewing,
     stats: {
       notes: 'Dank, Grapefruit, Bitter',
       abv: 6.5,
       ibu: null,
       srm: null,
       brix: null
     }
  },
  {
     label: 'Insight Brewing Sunken City (Growler)',
     style: 'Saison & Sauv Blanc Grapes',
     description: 'The fruity and light spiciness of the beer blends delicately with the grassy herbal characters of the sauvignon blanc grapes, leading to a wonderfully complex and exuberant beer.',
     site: 'http://www.insightbrewing.com/beers/',
     img: InsightBrewing,
     stats: {
       notes: 'Fruity, Spicy, Herbal-y',
       abv: 7.8,
       ibu: null,
       srm: null,
       brix: null
     }
  },
  {
     label: 'Big Root (Growler)',
     style: 'Rye IPA',
     description: 'Big Boot™ Rye IPA is an India Pale Ale (IPA) that will stun your senses.  Hues of amber and a frothy head conceal the beauty within. Three different kinds of rye and plenty of hops balanced by a slightly sweet grain bill make this a complex mural of illicit beauty.',
     site: 'http://www.urbangrowlerbrewing.com/beers-1/',
     img: UrbanGrowlerBrewing,
     stats: {
       abv: 6.5,
       ibu: 66,
       srm: null,
       brix: null
     }
  },
  {
     label: 'Cowbell (Growler)',
     style: 'Cream Ale',
     description: 'A "transitional beer" that may just lure the American light lager fans into the world of craft beer. Our cream ale is light gold in color and low in bitterness; the specialty malt and flaked maize add complexity to this smooth thirst quencher. This is a “lawnmower beer” that will leave you wanting more – no worries, just yell “I need more CowBell!”',
     site: 'http://www.urbangrowlerbrewing.com/beers-1/',
     img: UrbanGrowlerBrewing,
     stats: {
       abv: 5.2,
       ibu: 20,
       srm: null,
       brix: null
     }
  },
];