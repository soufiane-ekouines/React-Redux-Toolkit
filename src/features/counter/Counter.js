import { useSelector, useDispatch } from 'react-redux'
import { increment,decrement } from './counterSlice';
const Counter = () => {
    const count = useSelector((state)=> state.counter.count);
    const dispatch = useDispatch();
    return (
        <section>
            <div>{count}</div>
            <div>
                <button onClick={()=>dispatch(increment())}>Add</button>
                <button onClick={()=>dispatch(decrement())}>Min</button>

            </div>
        </section>
    )
}

export default Counter