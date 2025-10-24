import styles from '../../components/css/ThirdComponent.module.css'

const ThirdComponent = () => {
    return (
        <h4 className={styles.textName}>Third Component</h4>
    )
}

const FakeComponent = () => {
    return (
        <h4 className={styles.textName}>Fake Component</h4>
    )
}

export { ThirdComponent, FakeComponent }