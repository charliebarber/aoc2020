const fs = require('fs')

const file = fs.readFile('./input1.txt', 'utf8', (err, data) => {
    main(data)
})

const main = (data) => {
    data = data.split('\n')

    data.forEach(element1 => {
        data.forEach(element2 => {
            data.forEach(element3 => {
                const total = parseInt(element1) + parseInt(element2) + parseInt(element3)

                if (total == 2020) {
                    console.log(element1, element2, element3)
                    const product = element1 * element2 * element3
                    console.log('Product', product)
                }
            })
        })
    })
}


const part1 = (data) => {
    data = data.split('\n')

    data.forEach(element1 => {

        data.forEach(element2 => {
            const total = parseInt(element1) + parseInt(element2)

            if (total == 2020) {
                console.log(element1, element2)
                const multiplied = element1 * element2
                console.log('Multiplied', multiplied)
            }
        })
    })
}
