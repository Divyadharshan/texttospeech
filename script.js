function VoiceList() {
    var voices=speechSynthesis.getVoices();
    var voiceSelect=document.getElementById('voiceSelect');
    voices.forEach(function(k){
        var opt=document.createElement('option');
        opt.value=k.name;
        opt.textContent=k.name;
        voiceSelect.appendChild(opt);
    });
}
VoiceList();
speechSynthesis.onvoiceschanged=function() {
    VoiceList();
};
function speak() {
    var Input=document.getElementById('tex').value;
    var voiceSelect=document.getElementById('voiceSelect');
    var selVoice=voiceSelect.options[voiceSelect.selectedIndex].value;
    var utter=new SpeechSynthesisUtterance(Input);
    var voices=speechSynthesis.getVoices();
    var selvoiobj=voices.find(function(voice){
        return voice.name===selVoice;
    });
    utter.voice=selvoiobj;
    speechSynthesis.speak(utter);
}