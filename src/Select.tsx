import styles from './select.module.css';

type SelectOptions = {
    label: string;
    value: string;
}

type SelectProps = {
    options: SelectOptions[];
    value?: SelectOptions;
    onChange?: (value: SelectOptions | undefined) => void;
}

const Select = ({options}: SelectProps) => {
  return (
    <div tabIndex={0} className={styles.container}>
        <span className={styles.value}>Value</span>
        <button className={styles["clear-btn"]}>&times;</button>
        <div className={styles.divider}></div>
        <div className={styles.caret}></div>
        <div className={`${styles.options} ${styles.show}`}>
            <ul className={styles.option}>
                {options.map(option => (
                    <li>{option.label}</li>
                ))}
            </ul>
        </div>
    </div>
  )
}

export default Select