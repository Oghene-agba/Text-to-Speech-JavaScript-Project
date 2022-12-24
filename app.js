
var speech = document.getElementById('inputText'),
convert = document.getElementById('textToVoiceBTN'),
voiceIco = document.getElementById('voiceIco'),
count = 1;

speech.addEventListener('change', ()=>{

    speechText = this.value;
    speechSynthesis.cancel();
    convert.innerHTML = 'Text to speech';
        voiceIco.innerHTML = '&#128264;';

})

convert.addEventListener('click', ()=>{

    if (!speechSynthesis.speaking || speechSynthesis.pause()) {

        speechText = speech.value;
        
        // alert(speechText)

        var speechVoice = new SpeechSynthesisUtterance();
        var voices = speechSynthesis.getVoices();

        speechVoice.voice = voices[4];
        speechVoice.text = speechText;
        speechVoice.lang = 'en-US';

        speechSynthesis.speak(speechVoice); 
    }

    if (count == 1) {
        convert.innerHTML = 'Play';
        voiceIco.innerHTML = '&#128266;';
        speechSynthesis.resume();
        setTimeout(()=>{
            count = 2;
        }, 300);
    }else{
        convert.innerHTML = 'Pause';
        voiceIco.innerHTML = '&#128264;';
        speechSynthesis.paused;
        count = 1;
    }

    setInterval(()=>{
    
    if (!speechSynthesis.speaking && count == 2) {
        
        convert.innerHTML = 'Text to speech';
        voiceIco.innerHTML = '&#128264;';
        count = 1;  

    }
    },100)
})


