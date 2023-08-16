/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

export default function TypeWriter(props) {
    const [text, setText] = useState('');
    const [displayCursor, setDisplayCursor] = useState(false);

    const escreverNaTela = (text, i = 0) => {
        if (i < text.length) {
            setDisplayCursor(true);

            setText(text.slice(0, i + 1));
            setTimeout(() => escreverNaTela(text, i + 1), 100);
        } else if (i >= text.length && props?.hideCursor) {
            setDisplayCursor(false);
        }
    };

    useEffect(() => {
        setTimeout(() => escreverNaTela(props.text), props?.delay ?? 200);
    }, []);

    return (
        <div className="flex">
            {text}
            {displayCursor && (
                <span className="animate-animar-cursor">
                    |
                </span>
            )}
        </div>
    );
}
