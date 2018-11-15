class Hangman {
    constructor (word, remainingGuesses) {
        this.word = word.toLowerCase().split("")
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
        this.status = 'playing'
    }
    get puzzle() {
        let puzzle = ''
        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                puzzle += letter
            } else {
                puzzle += '*'
            }
        });
    
        return puzzle
    }
    calculateStatus() {
        let failed = this.remainingGuesses === 0
        let finished = true
   
        this.word.forEach((letter) => {
            if(!this.guessedLetters.includes(letter) && letter != ' ') {
             finished = false
            }
        })
        if (failed) {
            this.status = 'failed'
        } else if (finished) {
            this.status = 'finished'
        } 
    }
    makeGuess(letter) {
        if(this.status === 'playing') {
            if (!this.guessedLetters.includes(letter.toLowerCase())){
                this.guessedLetters.push(letter.toLowerCase())
                if (!this.word.includes(letter)) {
                    this.remainingGuesses -= 1
                }
            }
            this.calculateStatus()
        }
    }
    get statusMessage() {
        if (this.status === 'playing') {
            return `Guesses left: ${this.remainingGuesses}`
        } else if (this.status === 'failed') {
            let failedWord = this.word.join("")
            return `Nice try! The word was "${failedWord}" `
        }else {
            return 'Great work!! You guessed it right'
        }
    }

}




