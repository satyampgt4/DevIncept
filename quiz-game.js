
const quizData = [
    {
      question: "Q1: Which of the following is true about cookie handling in JavaScript?",
            a: "Javascript can manipulate cookies using the cookie property of Document object.",
            b: "Javascript can read, create, modify or delete the cookie or cookies that apply to the current web page.",
            c: "Both of the above",
            d: "None of the above",
            correct: "c",
          },
          {
            question: "Q2: Which of the following type of variable takes precedence over other if names are same?",
            a: "global variable",
            b: "local variable",
            c: "Both of the above",
            d: "None of the above",
            correct: "b",
          },
          {
            question: "Q3: Which of the following is correct about features of JavaScript?",
            a: "It cannot handle dates and time.",
            b: "JavaScript is a object-based scripting language.",
            c: "JavaScript is not interpreter based scripting language",
            d: "All of the above",
            correct: "b",
          },
          {
            question:
              "Q4: Which company developed JavaScript?",
            a: "Netscape",
            b: "Bell Labs",
            c: "Sun Microsystems",
            d: "IBM",
            correct: "a",
          },
          {
              question:
              "Q5: How can you get the type of arguments passed to a function?",
            a: "Using typeof operator",
            b: "Using getType function",
            c: "Both of the above",
            d: "None of the above",
            correct: "a",
          },
          {
              question: "Q6: Which built-in method returns the string representation of the number's value?",
              a: "ToValue()",
              b: "ToString()",
              c: "ToNumber()",
              d: "None of the above",
              correct: "b",
          }
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const e_text = document.getElementById('e_text')

const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {
    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
    
    

}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer

    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })

    return answer
}

submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    
    if(answer) {
      if(answer === quizData[currentQuiz].correct) {
          score++
      }

      currentQuiz++

      if(currentQuiz < quizData.length) {
          loadQuiz()
      } else {
          quiz.innerHTML = `
              <h2>You answered ${score}/${quizData.length} questions correctly</h2>
              <button onclick="window.location.reload()">Restart</button>
          `
      }
  }
})