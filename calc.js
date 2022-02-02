window.addEventListener('DOMContentLoaded', function() {
    const numberBtns = document.querySelectorAll('.numbers')
    const operatorBtns = document.querySelector('.operator')
    let operationDisplay = document.querySelector('#calc-operations')
    let resultDisplay = document.querySelector('#calc-result')
    
    let first, second

    const calculator = {
        operators: [
            'x', '+', '-', '/'
        ],

        add(f, s) {
            return f + s
        },

        sub(f, s) {
            return f - s
        },

        mul(f, s) {
            return f * s
        },

        div(f, s) {
            return f / s
        }
    }

    numberBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            operationDisplay.innerText += btn.innerText
            first = Number(btn.innerText)
            
        })
    })
})