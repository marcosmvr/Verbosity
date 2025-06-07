import { generateQuizQuestionsBatch } from '../services/mistral-service.js'
import { GeneratedQuizQuestion } from '../types/quiz-types.js'

export async function startQuiz(
  amount: number,
): Promise<GeneratedQuizQuestion[]> {
  if (!amount || amount <= 0) {
    throw new Error('O número de perguntas deve ser um valor positivo.')
  }

  try {
    const questions = await generateQuizQuestionsBatch(amount)

    if (questions.length !== amount) {
      console.warn(
        `A IA gerou ${questions.length} perguntas, mas ${amount} foram solicitadas.`,
      )
    }

    return questions
  } catch (error: any) {
    console.error(
      'Erro ao gerar perguntas com a IA:',
      error.message || 'Erro desconhecido',
    )
    throw new Error(
      'Falha ao obter perguntas do quiz. Tente novamente mais tarde.',
    )
  }
}
