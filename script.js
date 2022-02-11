let btn = document.getElementById("create");
let out = document.getElementById("output");
out.style.padding = '2em';
let quotes = [
    '“That proves you are unusual," returned the Scarecrow; "and I am convinced that the only people worthy of consideration in this world are the unusual ones. For the common folks are like the leaves of a tree, and live and die unnoticed.”― L. Frank Baum, The Land of Oz',
    '"The way to get started is to quit talking and begin doing." -Walt Disney',
    '"Your time is limited, so don\'t waste it living someone else\'s life.Don\'t be trapped by dogma – which is living with the results of other people\'s thinking." - Steve Jobs',
    '"If life were predictable it would cease to be life, and be without flavor." - Eleanor Roosevelt',
    '"If you look at what you have in life, you\'ll always have more. If you look at what you don\'t have in life, you\'ll never have enough." -Oprah Winfrey',
    '"If you set your goals ridiculously high and it\'s a failure, you will fail above everyone else\'s success." - James Cameron',
    '"Life is what happens when you\'re busy making other plans." -John Lennon',
    '"Spread love everywhere you go. Let no one ever come to you without leaving happier." -Mother Teresa',
    '"When you reach the end of your rope, tie a knot in it and hang on." -Franklin D. Roosevelt',
    '"Always remember that you are absolutely unique. Just like everyone else." -Margaret Mead',
    '"Don\'t judge each day by the harvest you reap but by the seeds that you plant." -Robert Louis Stevenson',
    '"The future belongs to those who believe in the beauty of their dreams." -Eleanor Roosevelt',
    '"Her name badge read: Hello! My name is DIE, DEMIGOD SCUM !"― Rick Riordan, The Son of Neptune',
    '"The best and most beautiful things in the world cannot be seen or even touched — they must be felt with the heart."" -Helen Keller',
    '"It is during our darkest moments that we must focus to see the light. " -Aristotle',
    '" Whoever is happy will make others happy too." -Anne Frank',
    '"Do not go where the path may lead, go instead where there is no path and leave a trail. "-Ralph Waldo Emerson',
    '“Get busy living or get busy dying.” — Stephen King',
    '“Ka knew very well that life was a meaningless string of random incidents”― Orhan Pamuk, Snow',
    '"Life is a long lesson in humility." - James M. Barrie',
    '"In three words I can sum up everything I\'ve learned about life: it goes on." -Robert Frost',
    '"Love the life you live. Live the life you love."-Bob Marley',
    '"Life is either a daring adventure or nothing at all. "-Helen Keller',
    '"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose." -Dr. Seuss',
    '"Life is made of ever so many partings welded together." -Charles Dickens',
    '"Your time is limited, so don\'t waste it living someone else\'s life. Don\'t be trapped by dogma — which is living with the results of other people\'s thinking." -Steve Jobs',
    '"Life is trying things to see if they work." -Ray Bradbury',
    '“Never ask an elf for help; they might decide your better off dead, eh?” ― Christopher Paolini, Eldest'

];
let i = 0;
btn.addEventListener('click', function () {
    randomquotes = quotes[i];
    out.innerHTML = randomquotes;
    i++;

})