const textarea=document.querySelector('textarea');
speechbtn=document.querySelector("button");
voicelist= document.querySelector('select');




let synth =speechSynthesis;
function voices(){
    for (let voice of synth.getVoices()){
        let selected=voice.name==="google us english"?'selected' :"";
        let option ='<option value='+voice.name+'>'+voice.name+voice.lang+'</option>'
        voicelist.insertAdjacentHTML('beforeend',option);
    }
}
synth.addEventListener("voiceschanged",voices)
function texttospeech(text){
    let utternance = new SpeechSynthesisUtterance(text);
    for (let voice of synth.getVoices()){
        if(voice.name==voicelist.value){
            utternance.voice=voice;
        }
    }
    speechSynthesis.speak(utternance);
}
speechbtn.addEventListener("click",e=>{
    e.preventDefault();
    if (textarea.value!==""){
        texttospeech(textarea.value)
    }
})