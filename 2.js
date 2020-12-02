const fs = require('fs')

fs.readFile('input2.txt', 'utf8', (err, data) => {
    main(data)
})

const main = (data) => {
    data = data.split('\n')

    data.splice(1000, 1)
    let meetsPolicy = 0

    data.forEach(element => {
        const [policy, password] = element.split(':')
        const [limit, letter] = policy.split(' ')
        const [min, max] = limit.split('-')

        let letterCount = 0
        for (let pos=0; pos < password.length; pos++) {
            if (password[pos] == letter) {
                letterCount += 1
            }
        }

        if (letterCount >= min && letterCount <= max) {
            meetsPolicy += 1
        }

//        console.log(min, max, letter, password, letterCount)
    })

    console.log(meetsPolicy, 'meet policy')
}
