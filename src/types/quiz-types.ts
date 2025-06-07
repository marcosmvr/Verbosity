export type GeneratedQuizQuestion = {
  question: string
  correct_answer: string
  options: string[]
}

export type QuizBatchResponse = {
  quizQuestions: GeneratedQuizQuestion[]
}
