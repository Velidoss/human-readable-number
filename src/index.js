module.exports = function toReadable (number) {

    const numbers = {
        ones:{
            1: 'one',
            2: 'two',
            3: 'three',
            4: 'four',
            5: 'five',
            6: 'six',
            7: 'seven',
            8: 'eight',
            9: 'nine'
        },
        dozens10_19:{
            10: 'ten',
            11: 'eleven',
            12: 'twelve',
            13: 'thirteen',
            14: 'fourteen',
            15: 'fifteen',
            16: 'sixteen',
            17: 'seventeen',
            18: 'eighteen',
            19: 'nineteen',
        },
        dozens20_more:{
            20: 'twenty',
            30: 'thirty',
            40: 'forty',
            50: 'fifty',
            60: 'sixty',
            70: 'seventy',
            80: 'eighty',
            90: 'ninety'
        },
        bigNumbers:{
            hundred: 'hundred',
            thousand: 'thousand',
            million: 'million',
            billions: 'billion'
        }

    }

    const numbersStr = number.toString()

    switch(numbersStr.length){
        case 1:
            if(number === 0) return 'zero'
            return numbers.ones[parseInt(numbersStr[0])]
        case 2:
            if(parseInt(numbersStr)>=10 && parseInt(numbersStr) <20){
                return numbers.dozens10_19[parseInt(numbersStr)]
            }else if(parseInt(numbersStr)>=20 ){
                return `${numbers.dozens20_more[parseInt(numbersStr[0])*10]}${parseInt(numbersStr[1]) !== 0 ? ` ${numbers.ones[parseInt(numbersStr[1])]}` : '' }`
            }
        case 3:
            if(parseInt(numbersStr.slice(1))===0){
                return `${numbers.ones[parseInt(numbersStr[0])]} hundred`
            }else if(parseInt(numbersStr[1])===0){
                return `${numbers.ones[parseInt(numbersStr[0])]} hundred ${numbers.ones[parseInt(numbersStr[2])]}`
            }else{
                if(parseInt(numbersStr.slice(1))>=10 && parseInt(numbersStr.slice(1)) <20){
                    return  `${numbers.ones[parseInt(numbersStr[0])]} hundred ${numbers.dozens10_19[parseInt(numbersStr.slice(1))]}`
                }else if(numbersStr.slice(1)>=20 ){
                    return `${numbers.ones[parseInt(numbersStr[0])]} hundred ${numbers.dozens20_more[parseInt(numbersStr[1])*10]}${parseInt(numbersStr[2]) !== 0 ? ` ${numbers.ones[parseInt(numbersStr[2])]}` : ''}`
                }
            }

        default:
            return null
    }
    

}


