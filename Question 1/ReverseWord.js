function reverseWords(string) {
    let wordList = [];
    let currentWord = '';

    for (let i = 0; i < string.length + 1; i++) {

        if (i == string.length) {
            wordList.unshift(currentWord);
        }
        else if ((string[i] !== " ") && (i !== string.length)) {
            currentWord += string[i];
        } else {
            wordList.unshift(currentWord);
            wordList.unshift(" ");
            currentWord = '';
        }
    }

    return wordList.join("");
}

console.log(reverseWords("Mary    had    a little lamb!       "))