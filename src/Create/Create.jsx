import styles from '../Create/Create.module.css';
import { useState } from 'react';

function Create() {
    
    const [cards, setCards] = useState([{ term: "", definition: "" }]);

    const updateCards = (index, field, value) => {
        const newCards = [...cards];
        newCards[index][field] = value;
        setCards(newCards);
    }

    const addCard = () => {
        setCards([...cards, { term: "", definition: "" }]);
    }

    return (
        <>
            <div className={styles.createContainer}>
                <div className={styles.header}>
                    <div className={styles.headerMessageWrapper}>
                        <h1 className={styles.headerMessage}>Create a new set</h1>
                    </div>
                    <div className={styles.headerButtonWrapper}>
                        <button className={styles.headerButton}>Create</button>
                    </div>
                </div>
                <div className={styles.statsWrapper}>
                    <input className={styles.titleInputField} placeholder='Title'/>
                    <textarea className={styles.titleInputField} id={styles.descriptionInputField} placeholder="Add a description... "></textarea>
                </div>

                {cards.map((card, index) => (
                    <div key={index} className={styles.flashcardWrapper}>
                        <input placeholder="Enter term" className={styles.flashcardInput} id={styles.flashcardTermInput} value={card.term} onChange={(e) => updateCards(index, "term", e.target.value)}></input>
                        <input placeholder="Enter definition" className={styles.flashcardInput} id={styles.flashcardDefInput} value={card.definition} onChange={(e) => updateCards(index, "definition", e.target.value)}></input>
                    </div>
                ))}
                <div className={styles.addCardWrapper}>
                    <button className={styles.addCard} onClick={addCard}>Add Card</button>
                </div>
            </div>
        </>
    )
}

export default Create;