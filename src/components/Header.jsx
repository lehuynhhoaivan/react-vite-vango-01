// Nên dùng
function Header({name}) {
    return (
            <>
                <h1>Component Header</h1>
                <div style={{ color: 'red' }}>My name is { name }</div>
            </>

    )
}

export default Header


// Cách này hạn chế dùng (props)
// function Header(props) {
        // props là 1 object {}
        // {
        //     name: 'Vango',
        //     age: 18,
        //     data: [1,2,3,4,5]
        // }
//     const { name, age, dada } = props
//    const name = props.name
//    const age = props.age
//    const data = props.data
//     console.log('Header props:', props)
//     return (
//             <>
//                 <h1>Component Header</h1>
//                 <div style={{ color: 'red' }}>My name is { props.name }</div>
//             </>

//     )
// }

// export default Header