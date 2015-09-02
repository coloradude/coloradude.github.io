$(document).ready(function(){
  $('.button').on('click', function(){
    shittyExcuse();
  });
  $(document).keypress(function(e) {
    if(e.which == 13) {
      shittyExcuse();
    }
  });

   function shittyExcuse(){ 
    //Get the gfy
    var randomGifRequest = 'http://gfycat.com/cajax/get/' + bullshitGif[Math.floor(Math.random() * bullshitGif.length)]
    $.get(randomGifRequest).then(function(responseData){
      $('video').attr('src', responseData.gfyItem.mp4Url)
    }); 
    //Randomize strings
    var randomSubject = subject[Math.floor(Math.random() * subject.length)]
    var randomVerb = verb[Math.floor(Math.random() * verb.length)]
    var randomAndThen = andThen[Math.floor(Math.random() * andThen.length)]
    var randomAnotherExcuse = anotherExcuse[Math.floor(Math.random() * anotherExcuse.length)]
    if (randomAndThen[0] !== ','){
      randomAndThen = ' '.concat(randomAndThen)
    }
    var completedExcuse = randomSubject + ' ' + randomVerb + randomAndThen;
    
    //Apply to dom
    $('.excuse').text(completedExcuse).addClass('display');
    $('.button').attr('value', randomAnotherExcuse);
    $('video').addClass('display');
  }

var subject = [
'My mother',
'My roomate\'s pet iguana',
'Obama',
'The Backstreet Boys',
'Hitler\'s Moustache',
'Sean Connery',
'A group of Somali Pirates',
'Your favorite pet rock',
'The Tooth Fairy',
'Your long lost stepmother',
'Aunt Jebadiah\'s world famous peach cobbler',
'Spider Man',
'Donald Trump',
'Satan',
'Kanye West',
'A horde of lusty women',
'Dwayne "The Rock" Johnson',
'Macho Man Randy Savage'
]

var verb = [
'exploded violently',
'ate my pants',
'siphoned all of my gasoline',
'kicked my dog',
'brought on the wrath of God',
'ate all of my chocolate-chip cookies',
'pooped all over my car',
'gave me Hepatitus C',
'tried to have me killed',
'cut off my arms and legs',
'rose from the dead',
'tazed me',
'molested my cat',
'shot me with a bazooka'
]

var andThen = [
'and this wasn\'t the first time.',
'and then kidnapped me to Africa.',
'and now I have cancer.',
'so I had to hitch a ride on the back of a Segway.',
'and my turtle only has one speed.',
'so I had to stop by Arby\'s on the way here.',
', I was barely able to escape.',
', it was torture.',
', it\'s even worse than the last time.',
'so I\'ve decided to join the Priesthood.',
'and now my family disowned me.'
]

var anotherExcuse = [
'You expect me to believe that?...another!',
'My boss will never buy it...another!',
'You can do better than that...another!',
'Smells like bullshit...another!',
'I used that one already...another!'
]

});

var bullshitGif = [
'PessimisticLinedJaguarundi',
'RegalCostlyBee',
'ZigzagWeepyAmurratsnake',
'GiftedDismalAfricancivet',
'ImmaterialCaringAnaconda',
'JovialPartialElephant',
'BronzeLavishDikkops',
'ImpassionedPalatableDogfish',
'HardtofindOrangeAnaconda',
'LimitedHatefulCowbird',
'AssuredLikelyCaracal',
'GrimBelovedAgouti',
'DevotedForkedBoa',
'AmazingReasonableFrillneckedlizard',
'OptimalElatedJay',
'AptHeftyChinesecrocodilelizard',
'DenseUnsungIndianrhinoceros',
'ComplicatedLargeAmericanblackvulture'
]



















