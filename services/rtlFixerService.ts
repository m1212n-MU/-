
interface ArabicLetter {
  isolated: string;
  initial: string;
  medial: string;
  final: string;
  connects: boolean;
}

const ARABIC_MAP: { [key: string]: ArabicLetter } = {
  'ء': { isolated: 'ﺀ', initial: 'ﺀ', medial: 'ﺀ', final: 'ﺀ', connects: false },
  'آ': { isolated: 'ﺁ', initial: 'ﺁ', medial: 'ﺂ', final: 'ﺂ', connects: false },
  'أ': { isolated: 'ﺃ', initial: 'ﺃ', medial: 'ﺄ', final: 'ﺄ', connects: false },
  'ؤ': { isolated: 'ﺅ', initial: 'ﺅ', medial: 'ﺆ', final: 'ﺆ', connects: false },
  'إ': { isolated: 'ﺇ', initial: 'ﺇ', medial: 'ﺈ', final: 'ﺈ', connects: false },
  'ئ': { isolated: 'ﺉ', initial: 'ﺋ', medial: 'ﺌ', final: 'ﺊ', connects: true },
  'ا': { isolated: 'ﺍ', initial: 'ﺍ', medial: 'ﺎ', final: 'ﺎ', connects: false },
  'ب': { isolated: 'ﺏ', initial: 'ﺑ', medial: 'ﺒ', final: 'ﺐ', connects: true },
  'ة': { isolated: 'ﺓ', initial: 'ﺓ', medial: 'ﺔ', final: 'ﺔ', connects: false },
  'ت': { isolated: 'ﺕ', initial: 'ﺗ', medial: 'ﺘ', final: 'ﺖ', connects: true },
  'ث': { isolated: 'ﺙ', initial: 'ﺛ', medial: 'ﺜ', final: 'ﺚ', connects: true },
  'ج': { isolated: 'ﺝ', initial: 'ﺟ', medial: 'ﺠ', final: 'ﺞ', connects: true },
  'ح': { isolated: 'ﺡ', initial: 'ﺣ', medial: 'ﺤ', final: 'ﺢ', connects: true },
  'خ': { isolated: 'ﺥ', initial: 'ﺧ', medial: 'ﺨ', final: 'ﺦ', connects: true },
  'د': { isolated: 'ﺩ', initial: 'ﺩ', medial: 'ﺪ', final: 'ﺪ', connects: false },
  'ذ': { isolated: 'ﺫ', initial: 'ﺫ', medial: 'ﺬ', final: 'ﺬ', connects: false },
  'ر': { isolated: 'ﺭ', initial: 'ﺭ', medial: 'ﺮ', final: 'ﺮ', connects: false },
  'ز': { isolated: 'ﺯ', initial: 'ﺯ', medial: 'ﺰ', final: 'ﺰ', connects: false },
  'س': { isolated: 'ﺱ', initial: 'ﺳ', medial: 'ﺴ', final: 'ﺲ', connects: true },
  'ش': { isolated: 'ﺵ', initial: 'ﺷ', medial: 'ﺸ', final: 'ﺶ', connects: true },
  'ص': { isolated: 'ﺹ', initial: 'ﺻ', medial: 'ﺼ', final: 'ﺺ', connects: true },
  'ض': { isolated: 'ﺽ', initial: 'ﺿ', medial: 'ﻀ', final: 'ﺾ', connects: true },
  'ط': { isolated: 'ﻁ', initial: 'ﻃ', medial: 'ﻄ', final: 'ﻂ', connects: true },
  'ظ': { isolated: 'ﻅ', initial: 'ﻇ', medial: 'ﻈ', final: 'ﻆ', connects: true },
  'ع': { isolated: 'ﻉ', initial: 'ﻋ', medial: 'ﻌ', final: 'ﻊ', connects: true },
  'غ': { isolated: 'ﻍ', initial: 'ﻏ', medial: 'ﻐ', final: 'ﻎ', connects: true },
  'ف': { isolated: 'ﻑ', initial: 'ﻓ', medial: 'ﻔ', final: 'ﻒ', connects: true },
  'ق': { isolated: 'ﻕ', initial: 'ﻗ', medial: 'ﻘ', final: 'ﻖ', connects: true },
  'ك': { isolated: 'ﻙ', initial: 'ﻛ', medial: 'ﻜ', final: 'ﻚ', connects: true },
  'ل': { isolated: 'ﻝ', initial: 'ﻟ', medial: 'ﻠ', final: 'ﻞ', connects: true },
  'م': { isolated: 'ﻡ', initial: 'ﻣ', medial: 'ﻤ', final: 'ﻢ', connects: true },
  'ن': { isolated: 'ﻥ', initial: 'ﻧ', medial: 'ﻨ', final: 'ﻦ', connects: true },
  'ه': { isolated: 'ﻩ', initial: 'ﻫ', medial: 'ﻬ', final: 'ﻪ', connects: true },
  'و': { isolated: 'ﻭ', initial: 'ﻭ', medial: 'ﻮ', final: 'ﻮ', connects: false },
  'ى': { isolated: 'ﻯ', initial: 'ﯨ', medial: 'ﯩ', final: 'ﻰ', connects: true },
  'ي': { isolated: 'ﻱ', initial: 'ﻳ', medial: 'ﻴ', final: 'ﻲ', connects: true },
  'پ': { isolated: 'ﭖ', initial: 'ﭘ', medial: 'ﭙ', final: 'ﭗ', connects: true },
  'چ': { isolated: 'ﭺ', initial: 'ﭼ', medial: 'ﭽ', final: 'ﭻ', connects: true },
  'ژ': { isolated: 'ﮊ', initial: 'ﮊ', medial: 'ﮋ', final: 'ﮋ', connects: false },
  'ک': { isolated: 'ﻙ', initial: 'ﻛ', medial: 'ﻜ', final: 'ﻚ', connects: true }, // Persian Keheh
  'گ': { isolated: 'ﮒ', initial: 'ﮔ', medial: 'ﮕ', final: 'ﮓ', connects: true },
  'ی': { isolated: 'ﻱ', initial: 'ﻳ', medial: 'ﻴ', final: 'ﻲ', connects: true }, // Persian Yeh
  '٠': { isolated: '٠', initial: '٠', medial: '٠', final: '٠', connects: false },
  '١': { isolated: '١', initial: '١', medial: '١', final: '١', connects: false },
  '٢': { isolated: '٢', initial: '٢', medial: '٢', final: '٢', connects: false },
  '٣': { isolated: '٣', initial: '٣', medial: '٣', final: '٣', connects: false },
  '٤': { isolated: '٤', initial: '٤', medial: '٤', final: '٤', connects: false },
  '٥': { isolated: '٥', initial: '٥', medial: '٥', final: '٥', connects: false },
  '٦': { isolated: '٦', initial: '٦', medial: '٦', final: '٦', connects: false },
  '٧': { isolated: '٧', initial: '٧', medial: '٧', final: '٧', connects: false },
  '٨': { isolated: '٨', initial: '٨', medial: '٨', final: '٨', connects: false },
  '٩': { isolated: '٩', initial: '٩', medial: '٩', final: '٩', connects: false },
};

const LIGATURES: { [key: string]: string } = {
  'لآ': 'ﻵ',
  'لأ': 'ﻷ',
  'لإ': 'ﻹ',
  'لا': 'ﻻ',
};

const shapeWord = (word: string): string => {
  let shaped = '';
  for (let i = 0; i < word.length; i++) {
    const char = word[i];
    const charData = ARABIC_MAP[char];
    if (!charData) {
      shaped += char;
      continue;
    }

    const prevChar = i > 0 ? word[i - 1] : null;
    const nextChar = i < word.length - 1 ? word[i + 1] : null;

    const prevConnects = prevChar ? ARABIC_MAP[prevChar]?.connects ?? false : false;
    const nextExists = !!nextChar;
    const charConnects = charData.connects;

    if (prevConnects && charConnects && nextExists) {
      shaped += charData.medial;
    } else if (prevConnects && charConnects && !nextExists) {
      shaped += charData.final;
    } else if (!prevConnects && charConnects && nextExists) {
      shaped += charData.initial;
    } else if (prevConnects && !charConnects) {
       shaped += charData.final;
    } else {
      shaped += charData.isolated;
    }
  }
  return shaped;
};


export const fixArabicText = (text: string): string => {
  if (!text) return '';

  let processedText = text;
  for (const lig in LIGATURES) {
    processedText = processedText.replace(new RegExp(lig, 'g'), LIGATURES[lig]);
  }
  
  const words = processedText.split(/(\s+)/);
  const shapedWords = words.map(word => {
    if (/\s+/.test(word)) { // It's a whitespace separator
      return word;
    }
    return shapeWord(word);
  });

  const finalShapedText = shapedWords.join('');
  return finalShapedText.split('').reverse().join('');
};
