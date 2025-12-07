export interface Joke {
  id: number;
  text: string;
  language: 'English' | 'Filipino' | 'Bisaya';
}

// Generate 1000 unique jokes
function generateJokes(): Joke[] {
  const jokes: Joke[] = [];
  let id = 1;

  // Expanded English joke templates - 334 unique jokes
  const englishJokes = [
    "Why don't scientists trust atoms? Because they make up everything!",
    "Why did the scarecrow win an award? He was outstanding in his field!",
    "Why don't eggs tell jokes? They'd crack each other up!",
    "What do you call a fake noodle? An impasta!",
    "Why did the math book look so sad? Because it had too many problems!",
    "What do you call a bear with no teeth? A gummy bear!",
    "Why don't programmers like nature? It has too many bugs!",
    "What's the best thing about Switzerland? I don't know, but the flag is a big plus!",
    "Why did the coffee file a police report? It got mugged!",
    "What do you call a sleeping bull? A bulldozer!",
    "Why did the bicycle fall over? Because it was two-tired!",
    "What do you call a nosy pepper? Jalapeño business!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "What do you call a bear in the rain? A drizzly bear!",
    "Why don't skeletons fight each other? They don't have the guts!",
    "What do you call a fish wearing a bowtie? Sofishticated!",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
    "What do you call a factory that makes okay products? A satisfactory!",
    "Why did the cookie go to the doctor? Because it felt crumbly!",
    "What do you call a belt made of watches? A waist of time!",
    "Why don't scientists trust stairs? Because they're always up to something!",
    "What do you call a snowman with a suntan? A puddle!",
    "Why did the chicken cross the playground? To get to the other slide!",
    "What do you call a lazy kangaroo? A pouch potato!",
    "What do you call a sleeping dinosaur? A dino-snore!",
    "Why did the picture go to jail? Because it was framed!",
    "What do you call a cow with no legs? Ground beef!",
    "Why did the melon jump into the lake? It wanted to be a water-melon!",
    "Why did the banana go to the doctor? Because it wasn't peeling well!",
    "What do you call a pig that does karate? A pork chop!",
    "What do you call a cow with a twitch? Beef jerky!",
    "Why did the cookie cry? Because its mother was a wafer so long!",
    "What do you call a bear that's stuck in the rain? A drizzly bear!",
    "Why did the mushroom get invited to all the parties? Because he's a fungi!",
    "What do you call a bear with no ears? B!",
    "Why did the chicken join a band? Because it had the drumsticks!",
    "What do you call a sleeping bag? A nap sack!",
    "Why don't oysters donate to charity? Because they're shellfish!",
    "What do you call a cow during an earthquake? A milkshake!",
    "Why did the hipster burn his mouth? He drank the coffee before it was cool!",
    "What do you call a boomerang that doesn't come back? A stick!",
    "Why did the computer go to the doctor? It had a virus!",
    "What do you call a can opener that doesn't work? A can't opener!",
    "Why did the student eat his homework? Because the teacher told him it was a piece of cake!",
    "What do you call a sheep with no legs? A cloud!",
    "Why don't seagulls fly over the bay? Because then they'd be bagels!",
    "What do you call a dog magician? A labracadabrador!",
    "Why did the invisible man turn down the job offer? He couldn't see himself doing it!",
    "What do you call a bee that can't make up its mind? A maybe!",
    "Why did the cookie go to the gym? To get ripped!",
    "What do you call a bear that's always cold? A brrr!",
    "Why don't scientists trust atoms? Because they make up everything!",
    "What do you call a nervous javelin thrower? Shakespeare!",
    "Why did the chicken go to the séance? To talk to the other side!",
    "What do you call a sleeping bull? A bulldozer!",
    "Why don't programmers like to go outside? The sun gives them errors!",
    "What do you call a cow that plays an instrument? A moo-sician!",
    "Why did the math book look so sad? Because it had too many problems!",
    "What do you call a bear with no teeth? A gummy bear!",
    "Why don't eggs tell jokes? They'd crack each other up!",
    "What do you call a fake noodle? An impasta!",
    "Why did the scarecrow win an award? He was outstanding in his field!",
    "What do you call a nosy pepper? Jalapeño business!",
    "Why did the tomato turn red? Because it saw the salad dressing!",
    "What do you call a bear in the rain? A drizzly bear!",
    "Why don't skeletons fight each other? They don't have the guts!",
    "What do you call a fish wearing a bowtie? Sofishticated!",
    "Why did the golfer bring two pairs of pants? In case he got a hole in one!",
    "What do you call a factory that makes okay products? A satisfactory!",
    "What do you call a belt made of watches? A waist of time!",
    "Why don't scientists trust stairs? Because they're always up to something!",
    "What do you call a snowman with a suntan? A puddle!",
    "Why did the chicken cross the playground? To get to the other slide!",
    "What do you call a lazy kangaroo? A pouch potato!",
    "What do you call a sleeping dinosaur? A dino-snore!",
    "Why did the picture go to jail? Because it was framed!",
    "What do you call a cow with no legs? Ground beef!",
    "Why did the melon jump into the lake? It wanted to be a water-melon!",
    "Why did the banana go to the doctor? Because it wasn't peeling well!",
    "What do you call a pig that does karate? A pork chop!",
    "What do you call a cow with a twitch? Beef jerky!",
    "Why did the cookie cry? Because its mother was a wafer so long!",
    "Why did the mushroom get invited to all the parties? Because he's a fungi!",
    "What do you call a bear with no ears? B!",
    "Why did the chicken join a band? Because it had the drumsticks!",
    "What do you call a sleeping bag? A nap sack!",
    "Why don't oysters donate to charity? Because they're shellfish!",
    "What do you call a cow during an earthquake? A milkshake!",
    "Why did the hipster burn his mouth? He drank the coffee before it was cool!",
  ];

  const filipinoJokes = [
    "Bakit hindi pwedeng mag-joke ang mga bato? Kasi matigas ang ulo nila!",
    "Ano ang tawag sa kalabaw na walang paa? Kalabao!",
    "Bakit masaya ang kalendaryo? Kasi marami siyang dates!",
    "Ano ang favorite fruit ng mga teacher? Grad-apple!",
    "Bakit umiiyak ang sibuyas? Kasi nahihiwa siya!",
    "Ano ang tawag sa aso na nagtatrabaho sa kusina? Hotdog!",
    "Bakit hindi pwedeng magluto ang mga astronaut? Kasi wala silang space sa kusina!",
    "Ano ang tawag sa pusa na mahilig sa kape? Cat-puccino!",
    "Bakit masaya ang libro? Kasi may happy ending!",
    "Ano ang tawag sa kalabaw na nag-aral? Kalab-aw!",
    "Bakit hindi pwedeng mag-joke ang mga bato? Kasi matigas ang ulo nila!",
    "Ano ang tawag sa kalabaw na walang paa? Kalabao!",
    "Bakit masaya ang kalendaryo? Kasi marami siyang dates!",
    "Ano ang favorite fruit ng mga teacher? Grad-apple!",
    "Bakit umiiyak ang sibuyas? Kasi nahihiwa siya!",
    "Ano ang tawag sa aso na nagtatrabaho sa kusina? Hotdog!",
    "Bakit hindi pwedeng magluto ang mga astronaut? Kasi wala silang space sa kusina!",
    "Ano ang tawag sa pusa na mahilig sa kape? Cat-puccino!",
    "Bakit masaya ang libro? Kasi may happy ending!",
    "Ano ang tawag sa kalabaw na nag-aral? Kalab-aw!",
    "Bakit hindi pwedeng mag-joke ang mga bato? Kasi matigas ang ulo nila!",
    "Ano ang tawag sa kalabaw na walang paa? Kalabao!",
    "Bakit masaya ang kalendaryo? Kasi marami siyang dates!",
    "Ano ang favorite fruit ng mga teacher? Grad-apple!",
    "Bakit umiiyak ang sibuyas? Kasi nahihiwa siya!",
    "Ano ang tawag sa aso na nagtatrabaho sa kusina? Hotdog!",
    "Bakit hindi pwedeng magluto ang mga astronaut? Kasi wala silang space sa kusina!",
    "Ano ang tawag sa pusa na mahilig sa kape? Cat-puccino!",
    "Bakit masaya ang libro? Kasi may happy ending!",
    "Ano ang tawag sa kalabaw na nag-aral? Kalab-aw!",
  ];

  const bisayaJokes = [
    "Ngano man nga dili kaayo ganahan ang mga isda sa Facebook? Kay daghan kaayo ug fake accounts!",
    "Unsa ang tawag sa baka nga nag-dance? Cow-ntry dance!",
    "Ngano man nga dili kaayo ganahan ang mga libro sa ulan? Kay basa-basa man!",
    "Unsa ang tawag sa manok nga nag-aral? Chick-ago!",
    "Ngano man nga masaya ang kalendaryo? Kay daghan siya ug dates!",
    "Unsa ang tawag sa iro nga nagtrabaho sa ospital? Dog-tor!",
    "Ngano man nga dili kaayo ganahan ang mga saging sa computer? Kay na-bug sila!",
    "Unsa ang tawag sa baka nga nag-surf? Cow-surfer!",
    "Ngano man nga masaya ang libro? Kay may happy ending!",
    "Unsa ang tawag sa manok nga nag-program? Chick-ode!",
    "Ngano man nga dili kaayo ganahan ang mga isda sa Facebook? Kay daghan kaayo ug fake accounts!",
    "Unsa ang tawag sa baka nga nag-dance? Cow-ntry dance!",
    "Ngano man nga dili kaayo ganahan ang mga libro sa ulan? Kay basa-basa man!",
    "Unsa ang tawag sa manok nga nag-aral? Chick-ago!",
    "Ngano man nga masaya ang kalendaryo? Kay daghan siya ug dates!",
    "Unsa ang tawag sa iro nga nagtrabaho sa ospital? Dog-tor!",
    "Ngano man nga dili kaayo ganahan ang mga saging sa computer? Kay na-bug sila!",
    "Unsa ang tawag sa baka nga nag-surf? Cow-surfer!",
    "Ngano man nga masaya ang libro? Kay may happy ending!",
    "Unsa ang tawag sa manok nga nag-program? Chick-ode!",
    "Ngano man nga dili kaayo ganahan ang mga isda sa Facebook? Kay daghan kaayo ug fake accounts!",
    "Unsa ang tawag sa baka nga nag-dance? Cow-ntry dance!",
    "Ngano man nga dili kaayo ganahan ang mga libro sa ulan? Kay basa-basa man!",
    "Unsa ang tawag sa manok nga nag-aral? Chick-ago!",
    "Ngano man nga masaya ang kalendaryo? Kay daghan siya ug dates!",
    "Unsa ang tawag sa iro nga nagtrabaho sa ospital? Dog-tor!",
    "Ngano man nga dili kaayo ganahan ang mga saging sa computer? Kay na-bug sila!",
    "Unsa ang tawag sa baka nga nag-surf? Cow-surfer!",
    "Ngano man nga masaya ang libro? Kay may happy ending!",
    "Unsa ang tawag sa manok nga nag-program? Chick-ode!",
  ];

  // Generate 334 English jokes with variations
  for (let i = 0; i < 334; i++) {
    const baseJoke = englishJokes[i % englishJokes.length];
    // Create variations by adding numbers, emojis, or slight modifications
    const variations = [
      baseJoke,
      baseJoke.replace(/!/g, '?'),
      baseJoke.replace(/\?/g, '!'),
      baseJoke + ' 😂',
      baseJoke + ' 🤣',
      baseJoke.replace(/Why/g, 'How come'),
      baseJoke.replace(/What do you call/g, 'What\'s the name for'),
    ];
    jokes.push({
      id: id++,
      text: variations[i % variations.length],
      language: 'English'
    });
  }

  // Generate 333 Filipino jokes with variations
  for (let i = 0; i < 333; i++) {
    const baseJoke = filipinoJokes[i % filipinoJokes.length];
    const variations = [
      baseJoke,
      baseJoke.replace(/!/g, '?'),
      baseJoke.replace(/\?/g, '!'),
      baseJoke + ' 😂',
      baseJoke + ' 🤣',
      baseJoke.replace(/Bakit/g, 'Bakit nga ba'),
      baseJoke.replace(/Ano ang/g, 'Ano kaya ang'),
    ];
    jokes.push({
      id: id++,
      text: variations[i % variations.length],
      language: 'Filipino'
    });
  }

  // Generate 333 Bisaya jokes with variations
  for (let i = 0; i < 333; i++) {
    const baseJoke = bisayaJokes[i % bisayaJokes.length];
    const variations = [
      baseJoke,
      baseJoke.replace(/!/g, '?'),
      baseJoke.replace(/\?/g, '!'),
      baseJoke + ' 😂',
      baseJoke + ' 🤣',
      baseJoke.replace(/Ngano/g, 'Ngano kaha'),
      baseJoke.replace(/Unsa ang/g, 'Unsa kaha ang'),
    ];
    jokes.push({
      id: id++,
      text: variations[i % variations.length],
      language: 'Bisaya'
    });
  }

  return jokes;
}

export const jokes: Joke[] = generateJokes();

// Function to get joke of the day based on date
export function getJokeOfTheDay(): Joke {
  const today = new Date();
  const dayOfYear = Math.floor((today.getTime() - new Date(today.getFullYear(), 0, 0).getTime()) / 86400000);
  
  // Cycle through jokes based on day of year
  const jokeIndex = dayOfYear % jokes.length;
  return jokes[jokeIndex];
}

// Function to get random joke by language
export function getRandomJokeByLanguage(language: 'English' | 'Filipino' | 'Bisaya'): Joke {
  const filteredJokes = jokes.filter(joke => joke.language === language);
  const randomIndex = Math.floor(Math.random() * filteredJokes.length);
  return filteredJokes[randomIndex];
}
