import styles from '../Create/Create.module.css';
import { useState, useEffect} from 'react';
import trashBin from '../Assets/delete.png';
import { useNavigate } from 'react-router-dom';

function Create() {
    
    const [cards, setCards] = useState([{ term: "", definition: "" }]);
    const [title, setTitle] = useState("");

    const [isVisible, setIsVisible] = useState(false);

    const navigate = useNavigate();
    const existingSets = JSON.parse(localStorage.getItem("sets")) || [];
    const navigateToDashboard = () => {
        if (cards.length >= 4 && title.trim() !== "") {
            navigate("/dashboard");

            localStorage.setItem(
                "sets",
                JSON.stringify([...existingSets, { title, cards }])
            );            
        }
        else {
            alert("Please ensure you have at least 4 cards and a title before creating the set.");
        }
    };

    useEffect(() => {
        if (cards.length >= 4 && title.trim() !== "") {
            setIsVisible(true);
        }
    }, [cards, title]);

    const updateCards = (index, field, value) => {
        const newCards = [...cards];
        newCards[index][field] = value;
        setCards(newCards);
    }

    const addCard = () => {
        setCards([...cards, { term: "", definition: "" }]);
    }

    const addTenCards = () => {
        const newCards = [...cards];
        for (let i = 0; i < 10; i++) {
            newCards.push({ term: "", definition: "" });
        }
        setCards(newCards);
    }

    const deleteCard = (index) => {
        setCards(cards.filter((_, i) => i !== index));
    }

    return (
        <>
            <div className={styles.createContainer}>
                <div className={styles.header}>
                    <div className={styles.headerMessageWrapper}>
                        <h1 className={styles.headerMessage}>Create a new set</h1>
                    </div>
                    <div className={styles.headerButtonWrapper}>
                        <button className={styles.headerButton} onClick={navigateToDashboard} style={{ display: isVisible ? 'block' : 'none'}}>Create</button>
                    </div>
                </div>
                <div className={styles.statsWrapper}>
                    <input className={styles.titleInputField} placeholder='Title' value={title} onChange={((e)=> setTitle(e.target.value))}/>
                    <textarea className={styles.titleInputField} id={styles.descriptionInputField} placeholder="Add a description... "></textarea>
                </div>

                {cards.map((card, index) => (
                    <div key={index} className={styles.flashcardWrapper}>
                        <input placeholder="Enter term" className={styles.flashcardInput} id={styles.flashcardTermInput} value={card.term} onChange={(e) => updateCards(index, "term", e.target.value)}></input>
                        <input placeholder="Enter definition" className={styles.flashcardInput} id={styles.flashcardDefInput} value={card.definition} onChange={(e) => updateCards(index, "definition", e.target.value)}></input>
                        <button className={styles.deleteFlashcardButton} onClick={()=> deleteCard(index)}><img src={trashBin} className={styles.trashBin}></img></button>
                    </div> 
                ))}
                <div className={styles.addCardWrapper}>
                    <button className={styles.addCard} onClick={addCard}>Add Card</button>
                    <button className={styles.addCard} onClick={addTenCards}>Add 10 Cards</button>
                </div>
            </div>
        </>
    )
}

export default Create;