window.addEventListener('DOMContentLoaded', function() {
    const number_btns = document.querySelectorAll('.numbers')
    const operator_btns = document.querySelectorAll('.operator')
    let operations_display = document.querySelector('#calc-operations')
    let output_display = document.querySelector('#calc-result')
    
    number_btns.forEach(btn => {
        btn.addEventListener('click', function() {
            operations_display.innerText += btn.innerText
        })
    })

    operator_btns.forEach(op_btn => {
        op_btn.addEventListener('click', function() {
            if(this.id != 'equal') {
                if(this.innerText == 'x') operations_display.innerText += '*'
                else operations_display.innerText += this.innerText
            }
            output_display.innerText = formatted_output(eval(operations_display.innerText))
        })
    })

    function formatted_output(num) {
        return num.toLocaleString("en")
    }

})