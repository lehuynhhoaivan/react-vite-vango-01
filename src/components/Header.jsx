function Header(props) {
    console.log('Header props:', props)
    return (
            <>
                <h1>Component Header</h1>
                <div style={{ color: 'red' }}>My name is { props.name }</div>
            </>

    )
}

export default Header