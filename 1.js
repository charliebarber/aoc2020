const fs = require('fs')

const file = fs.readFile('./input1.txt', 'utf8', (err, data) => {
    main(data)
})
const main = (data) => {
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
