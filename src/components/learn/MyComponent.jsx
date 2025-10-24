import styles from '../../components/css/MyComponent.module.css'

// () => { }
// component = html + css + js
const MyComponent = () => {
  return (
    <>
      <h4 className={styles.textName}>VANGO</h4>
      <h4 className={styles.textName}>BOIT</h4>
    </>
  )
}

export default MyComponent