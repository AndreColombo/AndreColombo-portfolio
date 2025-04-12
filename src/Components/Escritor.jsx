import { useEffect, useState } from "react";

const frases = [
  "console.log('Construindo ideias...');",
  "print('Criando algo incrível')",
  "System.out.println('Continue aprendendo!');",
  "git commit -m 'Resolvendo problemas...'",
];

export default function Escritor() {
  const [texto, setTexto] = useState("");
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = frases[i];

    const timeout = setTimeout(
      () => {
        setTexto(current.substring(0, j));

        if (!isDeleting && j < current.length) {
          setJ(j + 1);
        } else if (isDeleting && j > 0) {
          setJ(j - 1);
        } else if (!isDeleting && j === current.length) {
          setIsDeleting(true);
        } else if (isDeleting && j === 0) {
          setIsDeleting(false);
          setI((i + 1) % frases.length);
        }
      },
      isDeleting ? 75 : 125,
    );

    return () => clearTimeout(timeout);
  }, [i, j, isDeleting]);

  return <span>{texto}</span>;
}
