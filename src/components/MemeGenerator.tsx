import React, { useState } from 'react';
import { Heart, Sparkles } from 'lucide-react';
import { TypingText } from './TypingText';
import { LoadingSpinner } from './LoadingSpinner';

const phrases = [
  "hewo fwiends! let's make today NANAAAAAyyy! ✨",
  "gudmoinn!! today hab some yummies sammich 🥪",
  "꒰ ｡• ◡ •｡ ꒱ ♡✧ nanaa go nappy, baiii",
  "✧˖° sending chu lots of love today! ♡",
  "nyaa~ time for some snuggles (｡♥‿♥｡)",
  "hewwo hooman beans!! nanaa made pancake stackies todayy 🥞✨ so yummyyy~",
  "nyoo~ sleepyhead nanaa says goodmownin!! hab a paw-sitive day 🐾💤",
  "sending chu sparkle kisses and fluffy hugs! ✧ (✿◠‿◠) ♡",
  "nyappy nyappy~ nanaa found a shiny star today!! ✨⭐ yayayay!",
  "nyaa~ snacky time soon!! pwease bring choco-chippies 🍪🍫",
  "hihi fwends!! let's dance under the stawwies tonight (´,,•ω•,,)♡",
  "mownin' sunshinee~ nanaa hopes today is filled wiff magic sprinkles 🌈🌟",
  "nya nya, gonna go zoomies around the house now!! (⁄ ⁄•⁄ω⁄•⁄ ⁄)",
  "nyaa~ woke up and checked my MEME stash, nana feeling like a crypto queen today! 💎🐾✨",
  "read a new manga today... cried like a lil' baby (｡•́︿•̀｡) but it was sooo good! anyone else reading 'My Mochi Boyfriend'?? 🍡❤️",
  "heehee, spent all morning making a cute meme about NANAA gains XD anyone wanna see?? 🚀🐸💰",
  "omg bestfren bought nana a limited edition manga cover~ (*≧ω≦) ♡ can't stop staring at it!",
  "weekend mood: manga marathon + snacks 🍙🍜 who else binges 'Spy x Love' in one sitting? 🥹✨",
  "good eveninggg~ NANAA to the moooon!!! nana can't stop dreaming of lambo 🚗💨✨",
  "today’s thought: MEMECOINS are like the isekai of finance... ya never know when you’re gonna be OP (๑˃̵ᴗ˂̵)و",
  "nya nya~ spent hours looking at charts and... nani?! my portfolio is just like my gacha pulls... tragic T_T",
  "guess who found a vintage manga todayyy~ Nana feeling like she won the MEME lottery but IRL 😭💕",
  "bought more NANAA so nana can afford snacks 😭 worth it tho... right? RIGHT?? 🍡🍥",
  "morning thoughts: NANAA to the moon? more like Nana to the fridge first 🚀🍩 priorities, amirite? (´｡• ᵕ •｡`)💖",
  "chart-checking at 3am like: stares in disbelief is this the dip... or just Nana tripping? T_T",
];

export function MemeGenerator() {
  const [currentPhrase, setCurrentPhrase] = useState(phrases[0]);
  const [key, setKey] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const generateRandomPhrase = () => {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    setCurrentPhrase(phrases[randomIndex]);
    setKey(prev => prev + 1);
  };

  return (
    <div className="text-center mb-8">
      <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border-2 border-pink-200 mb-6 min-h-[120px] flex items-center justify-center transform transition-all duration-300 hover:shadow-pink-200/50 hover:border-pink-300">
        <div className="text-2xl">
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <TypingText key={key} text={currentPhrase} />
          )}
        </div>
      </div>
      <button
        onClick={generateRandomPhrase}
        disabled={isLoading}
        className={`bg-pink-400 hover:bg-pink-500 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-pink-300/30 flex items-center gap-2 mx-auto group ${
          isLoading ? 'opacity-75 cursor-not-allowed' : ''
        }`}
        >
        <Sparkles className="w-5 h-5 group-hover:animate-spin" />
        Sprinkle Some Adorable Magic
        <Heart className="w-5 h-5 group-hover:text-red-200" />
      </button>
    </div>
  );
}