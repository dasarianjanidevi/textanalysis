const textInput = document.getElementById('textInput');
const uniqueWordsDisplay = document.getElementById('uniqueWords');
const charCountDisplay = document.getElementById('charCount');
const searchString = document.getElementById('searchString');
const replaceString = document.getElementById('replaceString');
const replaceBtn = document.getElementById('replaceBtn');

// Function to update statistics in real-time
textInput.addEventListener('input', () => {
    const text = textInput.value;

    // Calculate Unique Words (case-insensitive)
    const words = text.toLowerCase().match(/\b\w+\b/g) || [];
    const uniqueWords = new Set(words);
    uniqueWordsDisplay.textContent = uniqueWords.size;

    // Calculate Character Count (excluding spaces and punctuation)
    const chars = text.replace(/[^\w\d]/g, ''); // Remove non-alphanumeric characters
    charCountDisplay.textContent = chars.length;
});

// Function to replace strings in textarea
replaceBtn.addEventListener('click', () => {
    const searchValue = searchString.value;
    const replaceValue = replaceString.value;

    // Ensure case-sensitive replacement
    if (searchValue) {
        const regex = new RegExp(searchValue, 'g');
        textInput.value = textInput.value.replace(regex, replaceValue);
    }
});