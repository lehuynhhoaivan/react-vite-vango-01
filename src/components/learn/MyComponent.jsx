import styles from '../../components/css/MyComponent.module.css'

// () => { }
// component = html + css + js
const MyComponent = () => {
  // const vango = 'VANGO'; // string
  // const vango = 24; // number
  // const vango = true; // boolean
  // const vango = undefined; // undefind
  // const vango = null; // null
  const vango = [1, 2, 3, 4]; // array
  const vango01 = {
    name: 'VANGO01',
    age: 24
  }
  return (
    <>
      <h4 className={styles.textName}>{vango} + VANGO</h4>
      <h4 className={styles.textName}>{vango01.name} + {vango01.age} + VANGO01</h4> // cách 1: không khuyến khích
      <h4 className={styles.textName}>{`${vango01.name} + ${vango01.age} + VANGO01`}</h4>  // cách 2: nên dùng 
      {/* // Thêm chú thích ở cách 2: {{  }}: dấu ngoặc nhọn bên trong để object, bên ngoài để js   */}
      <h4 className={styles.textName}>BOIT</h4>
    </>
  )
}

export default MyComponent