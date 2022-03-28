import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/Globalstate'

const AddTransaction = () => {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);
    const {addTransaction} = useContext(GlobalContext);
    const onSubmit = e => {
      e.preventDefault();
      const newTransaction = {
        id: Math.floor(Math.random() * 100000000),
        text,
        amount: +amount
      }
      addTransaction(newTransaction);
    }

  return (

    <>
    <div>
        <h4>Add new transaction</h4>
        <div className="border-bottom"></div>
        <form onSubmit={onSubmit}>
            <div className='form-control'>
<label htmlFor="text">Text</label>
<input type="text" value={text} onChange={(e) => setText(e.target.value) } name="Text" placeholder='Enter text...'/>
            </div>
            <div className='form-control'>
<label htmlFor="text">Amount <br/>
(negative - expense, positive - income)
</label>
<input type="number" value={amount} onChange={(e) => setAmount(e.target.value) } name="Amount" placeholder='Enter amount...'/>
            </div>
            <button className='btn'>Add Transaction</button>
        </form>
    </div>
    </>
  )
}

export default AddTransaction