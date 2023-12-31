let screen = document.getElementById('screen');
let keys = Array.from(document.getElementsByClassName('key'));
keys.map( key => {
    key.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                screen.innerText = '0';
                break;
            case '=':
                try{
                    screen.innerText = eval(screen.innerText);
                } catch {
                    screen.innerText = "Error"
                }
                break;
            case '<~':
                if (screen.innerText){
                   screen.innerText = screen.innerText.slice(0, -1);
                }
                break;
            default:
                screen.innerText += e.target.innerText;
        }
    });
});