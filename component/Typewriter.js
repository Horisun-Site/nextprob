"use client";

import { useEffect, useMemo, useState } from "react";

export default function Typewriter({
  words = [],
  className = "",
  typingSpeed = 68,
  deletingSpeed = 32,
  pause = 1500,
}) {
  const wordList = useMemo(
    () => (Array.isArray(words) ? words.filter(Boolean) : []),
    [words]
  );
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!wordList.length) return undefined;

    const word = wordList[index % wordList.length];
    let timeout;

    if (!deleting && text === word) {
      timeout = window.setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      timeout = window.setTimeout(() => {
        setDeleting(false);
        setIndex((current) => (current + 1) % wordList.length);
      }, 180);
    } else {
      timeout = window.setTimeout(
        () => {
          setText(
            word.slice(0, text.length + (deleting ? -1 : 1))
          );
        },
        deleting ? deletingSpeed : typingSpeed
      );
    }

    return () => window.clearTimeout(timeout);
  }, [text, deleting, index, wordList, typingSpeed, deletingSpeed, pause]);

  return (
    <span className={className}>
      {text}
      <span className="animate-blink ml-0.5 inline-block text-cyan-300">▌</span>
    </span>
  );
}
