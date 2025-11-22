import styles from '../Create/Create.module.css';

function Create() {
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
                </div>
            </div>
        </>
    )
}

export default Create;