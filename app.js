const puzzleEl = document.querySelector('#puzzle')
const quessesEl = document.querySelector('#guesses')
let game1 


const changeWord = function () {

    puzzleEl.innerHTML = ''
    quessesEl.textContent = game1.statusMessage
    let spans = ''
    game1.puzzle.split('').forEach((letter) => {
        spans = spans.concat(`<span>${letter}</span>`)
    });
    puzzleEl.innerHTML = spans

}

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    
    game1.makeGuess(guess)
    changeWord()
    
})

const startGame = async () => {
    const puzzle = await getPuzzle('2')
    game1 = new Hangman(puzzle, 5)
    changeWord()
}
document.querySelector('#reset').addEventListener('click', startGame)
startGame()



