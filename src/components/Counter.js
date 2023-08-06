import useCounter from "../hooks/useCounter"
function Counter() {
    const { counter, increment, decrement } = useCounter(0, 2)

    return (
        <>
            <div style={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                gap: 10,
                alignItems: 'center',
                height: '100vh',
                fontSize: 25


            }}>
                <button onClick={decrement}>-</button>
                <div>{counter}</div>
                <button onClick={increment}>+</button>
            </div>

        </>
    )
}
export default Counter