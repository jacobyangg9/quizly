import styles from '../Create/Create.module.css';

function Create() {
    return (
        <>
            <div className={styles.createHeader}>
                <h1>Create a new set</h1>
                <button>Create</button>
            </div>
        </>
    )
}

export default Create;