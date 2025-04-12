import SecaoInicio from "../Components/SecoesInicio/SecaoInicio";
import SecaoSobre from "../Components/SecoesInicio/SecaoSobre";
import SecaoProjetos from "../Components/SecoesInicio/SecaoProjetos";
import SecaoHabilidades from "../Components/SecoesInicio/SecaoHabilidades";
import SecaoContatos from "../Components/SecoesInicio/SecaoContatos";

export default function HomePT() {
  return (
    <>
      <main>
        <SecaoInicio />
        <SecaoSobre />
        <SecaoProjetos />
        <SecaoHabilidades />
        <SecaoContatos />
      </main>
    </>
  );
}
