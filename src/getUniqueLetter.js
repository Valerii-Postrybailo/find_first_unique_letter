export const getUniqueLetter = (text) => {
  const firstUniqueLettersInEachWord = [];

  const clearString = text.replace(/[^\w\s]/gi, '');

  // const textArr = text.toLowerCase().split(" ");

  const textArr = clearString.split(" ");
  // console.log(textArr);

  for (let i = 0; i < textArr.length; i++){
    let current = textArr[i];
    // console.log(current);
    const letters = current.split('');
    const findFirstUniqueLetter = letters.find(((x) => letters.indexOf(x) === letters.lastIndexOf(x)));
    firstUniqueLettersInEachWord.push(findFirstUniqueLetter);
    // console.log(firstUniqueLetterInEachWord);
  }
  const result = firstUniqueLettersInEachWord.find(((x) => firstUniqueLettersInEachWord.indexOf(x) === firstUniqueLettersInEachWord.lastIndexOf(x)));
  return result;

}

// console.log(getUniqueLetter('The Tao gave birth to machine language. Machine language gave birth to the assembler. The assembler gave birth to the compiler. Now there are ten thousand languages. Each language has its purpose, however humble. Each language expresses the Yin and Yang of software. Each language has its place within the Tao. But do not program in COBOL if you can avoid it. -- Geoffrey James, "The Tao of Programming"'));