// NOTE this all code is chatgpt genereated 

//Activity 1:Basic Regular Expressions
//Task 1: Wrtie a regular expression to match a simple pattern (eg, match all occurences of the world "javaScript" in a string). Log the matches.

const text1 = "JavaScript is a versatile language. Many JavaScript frameworks are popular.";

const regex1 = /javaScript/gi;

const matches1 = text.match(regex1);

if (matches1) {
    console.log("Matches found:", matches1);
} else {
    console.log("No matches found.");
}

//Task 2: Wrtie a regular expression to match all digits in a string. Log the matches.

// Sample string
const text2 = "There are 123 apples and 45 oranges, totaling 168 fruits.";

// Regular expression to match all digits
const regex2 = /\d/g;

// Find all matches
const matches2 = text.match(regex2);

// Log the matches
if (matches2) {
    console.log("Matches found:", matches2);
} else {
    console.log("No matches found.");
}


//Activity 2: Character classes and Quantifiers
//Task 3: Write a regular expression to match all words in a string that start with a capital letter. Log the matches.

// Sample string
const text3 = "Alice and Bob went to the Grand Canyon. They saw many Beautiful sights.";

// Regular expression to match words starting with a capital letter
const regex3 = /\b[A-Z][a-z]*\b/g;

// Find all matches
const matches3 = text.match(regex3);

// Log the matches
if (matches3) {
    console.log("Matches found:", matches3);
} else {
    console.log("No matches found.");
}


//Task 4:Write a regulat expression to matche all sequences of one or more digits in a string. Log the matches.

// Sample string
const text4 = "There are 123 apples, 45 oranges, and 6789 bananas.";

// Regular expression to match sequences of one or more digits
const regex4 = /\d+/g;

// Find all matches
const matches4 = text.match(regex4);

// Log the matches
if (matches4) {
    console.log("Matches found:", matches4);
} else {
    console.log("No matches found.");
}


//Activity 3:Grouping and Capturing
//Task 5: Write a regular expression to caputer the area code, central office code, and line number from a US phone number formet(e.g.,(123)456-7890). Log the caputers.

// Sample phone number
const phoneNumber = "(123)456-7890";

// Regular expression to capture area code, central office code, and line number
const regex5 = /\((\d{3})\)(\d{3})-(\d{4})/;

// Match the phone number
const match5 = phoneNumber.match(regex5);

if (match5) {
    // The full match is at index 0, followed by captured groups
    const areaCode = match5[1];
    const centralOfficeCode = match5[2];
    const lineNumber = match5[3];

    console.log("Area Code:", areaCode);
    console.log("Central Office Code:", centralOfficeCode);
    console.log("Line Number:", lineNumber);
} else {
    console.log("No match found.");
}


//Task 6: write a regular expression to caputer the username and domain from an email address log the caputers.

// Sample email address
const email = "username.example@domain.com";

// Regular expression to capture username and domain
const regex6 = /^([\w\.-]+)@([\w\.-]+)$/;

// Match the email address
const match = email.match(regex6);

if (match) {
    // The full match is at index 0, followed by captured groups
    const username = match[1];
    const domain = match[2];

    console.log("Username:", username);
    console.log("Domain:", domain);
} else {
    console.log("No match found.");
}


//Activity 4: Assertions and Boundaries
//Task 7:Write a rregular expression to match a word only if it is at the beginning of a string. Log the matches.

// Sample strings
const texts7 = [
  "Hello world!",
  "world Hello!",
  "Another example here",
  "Example"
];

// Regular expression to match a word only if it is at the beginning of the string
const regex7 = /^\b\w+\b/;

// Process each string
texts7.forEach(text7 => {
  const match = text7.match(regex7);
  
  if (match) {
      console.log(`Match for "${text7}":`, match[0]);
  } else {
      console.log(`No match for "${text7}".`);
  }
});


//Task 8: Write a regular expression to match a word only if it is at the end of a string . Log the matches.

// Sample strings
const text8 = [
  "Hello world",
  "This is an example",
  "Check the end word",
  "End"
];

// Regular expression to match a word only if it is at the end of the string
const regex8 = /\b\w+\b$/;

// Process each string
text8.forEach(text => {
  const match = text8.match(regex8);
  
  if (match) {
      console.log(`Match for "${text8}":`, match[0]);
  } else {
      console.log(`No match for "${text8}".`);
  }
});

//Activity 5: Practical Applications
//Task 9: Write a regular expression to validate a simple password(must include at least one uppercase letter, one lowercase letter, one digit ,and one special character). Log whether the password is valid.

// Sample passwords to validate
const passwords = [
  "Password1!",
  "password",
  "PASSWORD123",
  "Passw1!",
  "Valid1@Password"
];

// Regular expression to validate the password
const regex9 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// Process each password
passwords.forEach(password => {
  const isValid = regex.test(password);
  
  if (isValid) {
      console.log(`"${password}" is valid.`);
  } else {
      console.log(`"${password}" is invalid.`);
  }
});


//Task 10: Write a regular expression to validate a URL. Log whether the url is valid.

// Sample URLs to validate
const urls = [
  "http://example.com",
  "https://www.example.com:8080/path/to/resource?query=param#fragment",
  "ftp://ftp.example.com/file.txt",
  "http://example",
  "www.example.com",
  "http://example.com/space test",
  "https://sub.example.com/path"
];

// Regular expression to validate the URL
const regex10 = /^(https?|ftp):\/\/([a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)*)(:\d+)?(\/[^\s]*)?$/;

// Process each URL
urls.forEach(url => {
  const isValid = regex10.test(url);
  
  if (isValid) {
      console.log(`"${url}" is valid.`);
  } else {
      console.log(`"${url}" is invalid.`);
  }
});
