var socket = io.connect('192.168.43.98:9045', {'forceNew':true});

socket.on('messages',function(data){
    console.log(data);
    render(data);
})

function render (data){
    var html = data.map(function(elem,index){
        return(`<div>
                    <strong>${elem.author}</strong>:
                    <em>${elem.text}</em>
                    <br> Número vocales = <em>${elem.voca}</em> 
                    <br> Número palabras = <em>${elem.pala}</em>
                    <br> Cantidad numeros = <em>${elem.num}</em>
                    <br> Mayúsculas al Inicio = <em>${elem.may}</em>
                    <br> Palabras que terminan con consonante = <em>${elem.novocal}</em>
                    
                </div>`);
    }).join(" ");
    
    document.getElementById('messages').innerHTML = html;
}

function addMessage(_e){
    var payload = {
        author: document.getElementById('username').value,
        text: document.getElementById('mensaje').value,
        voca: document.getElementById('mensaje').value.match(/[aeiouAEIOUÁ-ÿ]/gm).length,
        pala: document.getElementById('mensaje').value.match(/([a-zA-Z0-9Á-ÿ]+)+/gm).length,
        num: document.getElementById('mensaje').value.match(/[0-9]/gm).length,
        may: document.getElementById('mensaje').value.match(/[A-Z][\w]*/gm).length,
        novocal : document.getElementById('mensaje').value.match(/[A-Za-zÁ-ý]+([^aeiouAEIUO\? ])\b/g).length 
    };
    socket.emit('new-message', payload);
    return false;
};    