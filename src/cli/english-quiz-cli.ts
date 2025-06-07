import inquirer from 'inquirer'
import { startQuiz } from '@/controllers/english-quiz-controller' // Certifique-se de que o nome da função e o caminho estão corretos para o seu controller
import { GeneratedQuizQuestion } from '@/types/quiz-types' // Garanta que este import aponte para sua interface de pergunta

export async function runEnglishQuiz() {
  console.log('Bem-vindo ao DevQuiz de Inglês para Brasileiros! 🇧🇷📚')

  let numQuestions = 0
  let validInput = false

  while (!validInput) {
    const { numQuestionsInput } = await inquirer.prompt([
      {
        type: 'input',
        name: 'numQuestionsInput',
        message: 'Quantas perguntas você gostaria de responder? (Padrão: 5)',
        default: '5',
        validate: (input: string) => {
          const parsedNum = parseInt(input)
          if (isNaN(parsedNum) || parsedNum <= 0) {
            return 'Por favor, digite um número válido maior que zero.'
          }
          return true
        },
      },
    ])

    numQuestions = parseInt(numQuestionsInput)
    validInput = true
  }

  console.log(
    `\n⏳ Gerando ${numQuestions} perguntas... Isso pode levar um momento.`,
  )

  let questions: GeneratedQuizQuestion[] = []
  try {
    questions = await startQuiz(numQuestions)

    if (questions.length === 0) {
      console.log(
        'Não foi possível gerar nenhuma pergunta. Tente novamente mais tarde.',
      )
      return
    }

    let score = 0
    let questionNumber = 0

    for (const question of questions) {
      questionNumber++ 
      console.log(`\n--- Pergunta ${questionNumber}/${questions.length} ---`) 

      const { userAnswer } = await inquirer.prompt([
        {
          type: 'list', 
          name: 'userAnswer',
          message: question.question,
          choices: question.options,
        },
      ])

      if (userAnswer.toLowerCase() === question.correct_answer.toLowerCase()) {
        score++
        console.log('✔️ Acertou!')
      } else {
        console.log(`❌ Errou! Resposta correta: ${question.correct_answer}`)
      }
    }

    console.log(
      `\n🎉 Quiz finalizado! Pontuação: ${score} de ${questions.length}`,
    )
  } catch (error: any) {
    console.error(
      'Ocorreu um erro inesperado ao iniciar o quiz:',
      error.message || error,
    )
  }
}

runEnglishQuiz()
