import styles from "./index.module.css";
import Logo from "./Logo/logo";
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <Logo/>
            </div>
            <div className={styles.item}>
                <h1 className={styles.title}>
                    Who wants to be a millionaire?
                </h1>
                <div className={styles.btn}>
                    <Link to="/play">Start</Link>
                </div>
            </div>
        </div>
    )
}

export default Home;
