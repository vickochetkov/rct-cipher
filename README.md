## Visual Vigenère Cipher
### The Application encryptes inputed text with help of crypto word using The Vigenère cipher method.

##### The Vigenère cipher is a method of encrypting alphabetic text by using a series of interwoven Caesar ciphers, based on the letters of a keyword (crypto word). It is a form of polyalphabetic substitution.

##### The action of a Caesar cipher is to replace each plaintext letter with a different one a fixed number of places down the alphabet. In cryptography, a Caesar cipher, also known as Caesar's cipher, the shift cipher, Caesar's code or Caesar shift, is one of the simplest and most widely known encryption techniques. It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. For example, with a left shift of 3, D would be replaced by A, E would become B, and so on. The method is named after Julius Caesar, who used it in his private correspondence.

####*****
####The main element of the App is the Main Display table. It makes it easier to understand principal and algorithm of the encryption.  

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

### Description

* HTML, CSS, SCSS, React
* React. Components features:
     * On the Create React App basis;
     * Three main parts of the App: Main Display, Crypto Word, Word Encoding, each consists of several components;        
     * The Main Display component contains a table with all the data involved in the encryption process;
     * The Crypto WORD element contains an uncontrolled input;
     * The Word Encoding element has two read-only input components. One of them is for an original text inputed by alphabet buttons, another for the result of encryption;

### User story
*   Main Display
1.  The App should show a table with 4 rows in the follow order:
      * Original Text  
      * Key
      * Calculation
      * Encrypted Text
1.  Original Text, Key and Encrypted Text are for letters of relevant words with their alphabet indices. Every letter should have its own cell.
1.  The Encrypted Text row should be backlighted.
1.  Calculation is for a visual mathematical representation of the encoding process. It should show how to compute the index of the encrypted letter.  

*   Crypto WORD
1.  User can see and use a crypto word input element.
1.  User can use a submit button element to turn an inputing crypto word into the current Crypto WORD.
1.  The App should check if the crypto word is a single word which consists of letters only and contains as much as 3-10 characters.  
1.  The App should return a mistake and warn User if User tries to submit a wrong word. The App should hide an error message and do submit if User has fixed the word and tries to submit the correct word now.  
1.  User can see current Crypto WORD in a table where every letter is  separated from others and has its alphabet index.
1.  The App should backlight the current crypto WORD letter.   

*   Word Encoding
1.  User can see and use a row of alphabet buttons to type in an original word.
1.  User can see current encrypted equivalent for every alphabet letter at the bottom of each alphabet button.
1.  User can see the original word in read-only input element.
1.  User can see the encrypted backlighted text in read-only input element as it is being typed.
1.  User can clear all the input elements and Main Display Table by pressing the Clear button.

####    Click image to zoom
![Jest watch mode](https://raw.githubusercontent.com/vickochetkov/my-md-page/master/img/11.gif)
