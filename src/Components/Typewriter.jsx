import { useEffect, useState } from "react";

const phrases = [
  "console.log('Building ideas...');",
  "print('Creating something awesome')",
  "System.out.println('Keep learning!');",
  "git commit -m 'Solving problems...'",
];

export default function Typewriter() {
  const [text, setText] = useState("");
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[i];

    const timeout = setTimeout(
      () => {
        setText(current.substring(0, j));

        if (!isDeleting && j < current.length) {
          setJ(j + 1);
        } else if (isDeleting && j > 0) {
          setJ(j - 1);
        } else if (!isDeleting && j === current.length) {
          setIsDeleting(true);
        } else if (isDeleting && j === 0) {
          setIsDeleting(false);
          setI((i + 1) % phrases.length);
        }
      },
      isDeleting ? 75 : 125,
    );

    return () => clearTimeout(timeout);
  }, [i, j, isDeleting]);

  return <span>{text}</span>;
}
