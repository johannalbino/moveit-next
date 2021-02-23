import styles from '../styles/components/Profile.module.css';

export function Profile() {

    return (
        <div className={styles.profileContainer}>
            <img src="https://avatars.githubusercontent.com/u/24922067?s=460&u=16f704f1be5fe60ad580dec56a2bd6c35f576ab2&v=4" alt="Johann Albino" />
            <div>
                <strong>Johann Albino</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level 1
                </p>
            </div>
        </div>
    );
}