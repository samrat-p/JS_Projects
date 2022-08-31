const textarea = document.querySelector('#text');
let voicelist= document.querySelector('#voice');
let speechbtn = document.querySelector('.submit');

let synth = speechSynthesis
let isspeaking = true

function voicespeech(){
for(let voice of synth.getVoices()){
    let option = document.createElement('option')
    option.text = voice.name
    voicelist.add(option)
    console.log(option)
}
}
synth.addEventListener('voiceschanged',voicespeech)
function texttospeech(text){
        let utternance = new SpeechSynthesisUtterance(text)
        for (let voice of synth.getVoices()){
            if(voice.name === voicelist.value){
                utternance.voice = voice
            }
        }
        speechSynthesis.speak(utternance)
    }
    speechbtn.addEventListener('click',(e) =>{
        e.preventDefault()
        if (textarea.value !== '') {
            if (!synth.speaking) {
                texttospeech(textarea.value)
            }
            if (textarea.value.lenght > 80){
                if (isspeaking){
                    synth.resume()
                    isspeaking = false
                    speechbtn.innerHTML='Pause Speech'
                } else{
                    synth.pause ()
                    isspeaking = true
                    speechbtn.innerHTML ='Resume Speech'
                }
                setInterval(() => {
                    if (!synth.speaking && !isspeaking) {
                        isspeaking = true;
                        speechbtn.innerHTML = 'Convert to Speech'
                    }
                }
                )
            } else {
                speechbtn.innerHTML = 'Convert To Speech'
            }
        }
    })
