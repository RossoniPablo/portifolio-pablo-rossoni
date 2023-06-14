export  default function Typing() {
    let letter = 0;
    const text = 'Pablo Rossoni';

    function typeWriter() {
        if(letter < text.length) {
            document.querySelector(".principal-sentence").innerHTML += text.charAt(letter);
            letter++;
            setTimeout(typeWriter, 180)
            }
        }

    typeWriter();
}