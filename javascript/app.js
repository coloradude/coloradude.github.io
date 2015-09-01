$(document).ready(function(){
  $('.button').on('click', function(){

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

  });

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
'A flock of buffalo',
'A gaggle of geese',
'The NSA',
'Spider Man',
'Donald Trump',
'Satan',
'Kanye West',
'A horde of lusty women'
]

var verb = [
'exploded violently',
'ate my pants',
'siphoned all of my gasoline',
'was struck by lightning',
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
'and then the CIA kidnapped me.',
'and now I have cancer.',
'so I went to Africa instead.',
'so I had to hitch a ride on the back of a Segway.',
'and my turtle only has one speed.',
'so I had to stop by Arby\'s on the way in.',
', I was barely able to escape.',
', I was tortured for days.',
', it\s even worse than the last time.',
'so I\'ve decided to become join the Priesthood.'
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
'GrimBelovedAgouti'
]



















