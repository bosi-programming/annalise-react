import { Text } from '../Text';
import { Newsletter } from './components/Newsletter';
import { Social } from './components/Social';

export function Footer() {
  return (
    <div className="lg:px-30 lg:pt-15 px-8">
      <Newsletter className="pb-22" />
      <Social />
      <Text className="text-center text-white" size="small">
        Feito com suor, lágrimas e muita ajuda de gente boa demais.
      </Text>
      <Text className="lg:pb-18 pb-5 text-center text-white" size="small">
        Obrigada pela visita! Volte mais vezes 💜
      </Text>
      <hr className="text-neutral-300" />
      <Text className="pt-6 text-center text-white" size="small">
        Annalise Cerqueira-Maia é um pseudônimo.
      </Text>
      <Text className="pb-5 text-center text-white lg:pb-12" size="small">
        © 2025 todos os direitos reservados. Design by Anna & @DaBruOficial.
      </Text>
      <Text className="lg:pb-35 pb-10 text-white" size="details">
        Oi, você que chegou até aqui! Essa é a parte das letras miúdas (pouca gente lê, mas é importante): seus dados
        são usados apenas pra te enviar novidades sobre o livro ADE. Nada de terceiros. Se participar de sorteios ou do
        clube do livro, recomendo ler os{' '}
        <a
          className="underline"
          href="https://docs.google.com/document/d/1L113L91ScvYjhnnP0RLjZ8TeO6e0RaszeWQ3duWmJ88/edit?usp=sharing"
          target="_blank"
          rel="license"
        >
          Termos e Condições.
        </a>
        Dúvidas ou quer excluir seus dados? Escreva para annalisecerqueira@gmail.com. Obrigada pelo voto de confiança —
        e por ler até aqui. Prometo que minha prosa é bem mais interessante que esse rodapé. ✨
      </Text>
    </div>
  );
}
