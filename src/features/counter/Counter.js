import { useSelector, useDispatch } from 'react-redux'
import { increment,decrement,rest,incrementbyamount } from './counterSlice';
import { useState } from 'react';
const Counter = () => {
    const count = useSelector((state)=> state.counter.count);
    const dispatch = useDispatch();
    const [num,setnum] = useState(0);
    return (
        <section>
            <div>{count}</div>
            <div>
                <button onClick={()=>dispatch(increment())}>Add</button>
                <button onClick={()=>dispatch(decrement())}>Min</button>
                <button onClick={()=>dispatch(rest())}>rest</button>

                <input type='text' value={num} onChange={(e)=>setnum(e.target.value)}/>
                <button onClick={()=>dispatch(incrementbyamount(Number(num)))}>add {num}</button>



            </div>
        </section>
    )
}

export default Counter