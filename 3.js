const fs = require('fs')

fs.readFile('input3.txt', 'utf8', (err, data) => {
    main(data)
})

const main = (data) => {
    console.log(data)
}
