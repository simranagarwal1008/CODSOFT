let op = "";
let buttons = document.querySelectorAll("button");
Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (e)=>{
        if (e.target.innerHTML == "=" ){
            op = eval(op );
            document.querySelector('input').value = op;
        }

        else if (e.target.innerHTML == "AC" ){
            op = "";
            document.querySelector('input').value = op;
        }

        else if (e.target.innerHTML == "C" ){
            op = op.slice(0,-1);
            document.querySelector('input').value = op;
        }

        else{
            console.log(e.target)
            op = op + e.target.innerHTML;
            document.querySelector('input').value = op;
        }
    })
})