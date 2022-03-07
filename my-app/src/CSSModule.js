import styles from './CSSModule.module.css';

const CSSModule = () => {
    return (<div>
        <div className={`${styles.wraper} ${styles.inverted}`}>
            안녕하세요.
            <div className="something">css</div>
        </div>
    </div>)
}

export default CSSModule;