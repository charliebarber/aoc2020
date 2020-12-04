const fs = require('fs')

fs.readFile('input3.txt', 'utf8', (err, data) => {
    main(data)
})

const main = (data) => {
    const lines = data.split('\n')
    lines.splice(323,1)
    const map = lines.map(line => line.split(''))

    const total = treeCounter(map,1,1) * treeCounter(map,3,1) * treeCounter(map,5,1) * treeCounter(map,7,1) * treeCounter(map,1,2)
    console.log(total)
   }

const treeCounter = (map, x, y) => {
    let posX = 0
    let posY = 0
    let treeCount = 0

    for (posY = y; posY < map.length; posY += y) {
        posX += x
        if (posX > 30) {
            posX = (posX - 1) % 30
        }
        if (map[posY][posX].includes('#')) {
            treeCount += 1
        }
    }

    return treeCount
}

const part1 = (data) => {
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
