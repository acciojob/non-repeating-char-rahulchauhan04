function firstNonRepeatedChar(str) {
    // Create a map to count the occurrences of each character
    const charCount = {};

    // Fill the map with character frequencies
    for (const char of str) {
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }

    // Find the first character with a count of 1
    for (const char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    // If no non-repeated character found, return null
    return null;
}

// Example usage:
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));
