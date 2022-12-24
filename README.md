# Text-to-Speech-JavaScript-Project

![2](https://user-images.githubusercontent.com/72680556/209416824-83e81598-d013-4863-b578-9289493f40c0.png)

# Introduction
This project is a simple text-to-speech converter written in JavaScript. It uses the <a href="https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API">Web Speech API</a> to synthesize speech from text in real-time.

![4](https://user-images.githubusercontent.com/72680556/209416837-93753ebd-b260-430c-abb4-9ba2325718e1.png)

# Features
<li> Convert any piece of text to speech with a single function call
<li> Customize the voice, pitch, and rate of the synthesized speech
<li> Works in modern web browsers that support the Web Speech API

# Installation
To use this project in your own code, simply include the text-to-speech.js file in your HTML file:

***
<pre> <script src="app.js"></script> </pre>
***

# Usage
The main function for converting text to speech is speak(text, options), where text is the string of text to be spoken and options is an optional object that can contain the following properties:

<li> voice: A SpeechSynthesisVoice object representing the voice to be used for synthesis. If not specified, the default voice will be used.
<li> pitch: A number between 0 and 2, representing the pitch of the synthesized speech. A value of 1 is the default.
<li> rate: A number between 0.1 and 10, representing the rate of the synthesized speech. A value of 1 is the default.

Here is an example of how to use the speak() function:

***javascript
<pre> speak('Hello, world!', {
  pitch: 1.5,
  rate: 0.75,
}); </pre>
***

# Browser Compatibility
The Web Speech API is supported in the following web browsers:

<li> Google Chrome
<li> Microsoft Edge
<li> Mozilla Firefox
<li> Safari (limited support)

# License
This project is licensed under the MIT License. See the LICENSE file for details.
