let text = document.getElementById('text')
let envoyer = document.getElementById('envoyer').addEventListener('click', verif)

function verif(){

    let text_stock = text.value
    text_stock = text_stock.split("")

    if(isNaN( Number(text.value + 1))){
        console.error('ERROR')
    }else{

        console.log(text_stock)

        for(i = 0; i < text_stock.length ; i++ ){
            if(i%2 != 0){
                let stock = text_stock[i] * 2
                text_stock.splice(i, 1 , stock)

            }else{
                console.log('impair')
            }
        }
    }

    console.log(text_stock)

    var p = document.createElement('p')
    p.innerHTML = text_stock
    document.body.appendChild(p)

}