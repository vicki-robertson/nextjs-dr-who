import styles from './SmallButton.module.scss'

const SmallButton = ({ href, children }) => {
    return (
      <button className={styles.button}>
        <a className={styles.buttonText}
            href={href} target="_blank">
            {children}
        </a>
      </button>
    );
  };

export default SmallButton