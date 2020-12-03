const fs = require('fs')

fs.readFile('input3.txt', 'utf8', (err, data) => {
    main(data)
})

const main = (data) => {
    const lines = data.split('\n')
    lines.splice(323,1)
    const map = lines.map(line => line.split(''))

    let posX = 0
    let posY = 0
    let treeCount = 0

    for (posY = 1; posY <= lines.length - 1; posY += 1) {
        posX += 3
        if (posX > 30) {
            posX = (posX - 1) % 30
        }
        if (map[posY][posX].includes('#')) {
            treeCount += 1
        }
    }

    console.log(treeCount)
}
