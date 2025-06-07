import { generateQuizQuestionsBatch } from '../services/mistral-service.js';
export async function startQuiz(amount) {
    if (!amount || amount <= 0) {
        throw new Error('O número de perguntas deve ser um valor positivo.');
    }
    try {
        const questions = await generateQuizQuestionsBatch(amount);
        if (questions.length !== amount) {
            console.warn(`A IA gerou ${questions.length} perguntas, mas ${amount} foram solicitadas.`);
        }
        return questions;
    }
    catch (error) {
        console.error('Erro ao gerar perguntas com a IA:', error.message || 'Erro desconhecido');
        throw new Error('Falha ao obter perguntas do quiz. Tente novamente mais tarde.');
    }
}
