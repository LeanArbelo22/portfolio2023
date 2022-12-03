import './animate-letters.scss';

const AnimateLetters = ({ letterClass, stringArray }) => {
    return (
        <span>
            {
                stringArray.map((character, i) => (
                    <span key={character + i} className={`${letterClass} _${i}`}>
                        {character}
                    </span>
                ))
            }
        </span>
    )
};

export default AnimateLetters;