## Visual Cipher
### The Application encryptes inputed text with help of crypto word using The Vigenère cipher method.

##### The Vigenère cipher is a method of encrypting alphabetic text by using a series of interwoven Caesar ciphers, based on the letters of a keyword (crypto word). It is a form of polyalphabetic substitution.

##### The action of a Caesar cipher is to replace each plaintext letter with a different one a fixed number of places down the alphabet. In cryptography, a Caesar cipher, also known as Caesar's cipher, the shift cipher, Caesar's code or Caesar shift, is one of the simplest and most widely known encryption techniques. It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. For example, with a left shift of 3, D would be replaced by A, E would become B, and so on. The method is named after Julius Caesar, who used it in his private correspondence.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

### Description

* HTML, CSS, SCSS, React
* React. Components features:
     * On the [Create React App] basis;
     * Three main parts of the App: Main Display,         
     * Parent-Children relations between different components;
     *
     Initial state loads data from file with const string;
     * Button to clear preloaded (or existing) text;
     * Button to show example text;

### User story
1.  User can see a textarea input element.
1.  User can see a preview output element.
1.  When I enter text into the #editor element, the #preview element is updated as I type to display the content of the textarea.
1.  When the App first loads, the markdown placeholder in the Editor's field  contains valid markdown that represents following elements:
    * a header (H1 size);
    * a sub header (H2 size);
    * a link;
    * an inline code;
    * a code block;
    * a list item;
    * a blockquote;
    * an image;
    * bolded text;
    * italic text;
    * crossing text.    
1.  When the App first loads, the default markdown placeholder in the Editor's field renders as HTML in the Previewer.
1.  When User enter markdown text into the Editor, the text is rendered as HTML in the Previewer as User types.
1.  When User clicks a link rendered by the App, the link is opened up in a new tab.
1.  The App interprets carriage returns and renders them as br (line break) elements.

####    Click image to zoom
![Jest watch mode](https://raw.githubusercontent.com/vickochetkov/my-md-page/master/img/11.gif)
