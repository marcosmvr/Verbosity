import { Mistral } from '@mistralai/mistralai'
import 'dotenv/config'
import { GeneratedQuizQuestion, QuizBatchResponse } from '../types/quiz-types' // Importe o novo tipo

const apiKey = process.env.MISTRAL_API_KEY

if (!apiKey) {
  throw new Error('MISTRAL_API_KEY não está configurada no ambiente.')
}

const client = new Mistral({ apiKey })

export async function generateQuizQuestionsBatch(
  amount: number,
): Promise<GeneratedQuizQuestion[]> {
  try {
    const chatResponse = await client.chat.complete({
      model: 'mistral-small-2503',
      messages: [
        {
          role: 'system',
          content:
            'Você é um professor de inglês didático, criando exercícios de múltipla escolha para brasileiros. As questões devem focar em gramática ou vocabulário. Cada pergunta deve ter uma única resposta correta entre quatro opções (1 correta e 3 incorretas).',
        },
        {
          role: 'user',
          content: `Crie ${amount} perguntas de múltipla escolha de inglês.
            Cada pergunta no lote deve ser **única** e abordar um **tópico de inglês diferente** (gramática, vocabulário, phrasal verbs, tempos verbais, preposições, etc.).
            Para cada pergunta, inclua 4 alternativas (sendo 1 correta e 3 incorretas).
            Retorne um ÚNICO objeto JSON com uma chave 'quizQuestions' que contém um ARRAY de objetos, onde cada objeto no array tem as chaves: 'question' (a pergunta em si), 'options' (um array de strings com as 4 alternativas) e 'correct_answer' (a resposta correta exata como aparece nas opções).
            
            **Exemplo de estrutura JSON esperada:**
            {
              "quizQuestions": [
                {
                  "question": "What is the past tense of 'eat'?",
                  "options": ["eats", "ate", "eaten", "eating"],
                  "correct_answer": "ate"
                },
                {
                  "question": "Choose the correct preposition: 'I am good ___ English.'",
                  "options": ["in", "at", "on", "for"],
                  "correct_answer": "at"
                }
              ]
            }`,
        },
      ],
      responseFormat: { type: 'json_object' },
    })

    const rawContent = chatResponse.choices[0].message.content

    if (typeof rawContent === 'string') {
      try {
        const batchResponse: QuizBatchResponse = JSON.parse(rawContent)

        batchResponse.quizQuestions.forEach(q => {
          q.options = q.options.sort(() => Math.random() - 0.5)
        })

        return batchResponse.quizQuestions
      } catch (parseError) {
        console.error(
          'Erro ao fazer parse do JSON recebido da API da IA:',
          parseError,
        )
        console.error('Conteúdo recebido (possível JSON inválido):', rawContent)
        throw new Error(
          'Resposta da IA não é um JSON válido ou não está no formato de lote esperado.',
        )
      }
    } else {
      console.error(
        'Conteúdo inesperado recebido da API da IA. Não é uma string.',
      )
      throw new Error('Formato de resposta inesperado da API da IA.')
    }
  } catch (error: any) {
    console.error(
      'Erro ao gerar perguntas em lote com Mistral:',
      error.message || error,
    )
    throw new Error(
      'Não foi possível gerar as perguntas no momento. Verifique sua chave de API ou conexão.',
    )
  }
}
