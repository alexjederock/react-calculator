import React, { useState } from 'react'

export default () => {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [op, setOp] = useState('+')
  const [result, setResult] = useState('')

  const operation = {
    '+': () => num1 + num2,
    '-': () => num1 - num2,
    '*': () => num1 * num2,
    '/': () => num1 / num2,
  }
  const changeOp = (str) => {
    setOp(str)
    setResult('')
    setNum1('')
    setNum2('')
  }
  const validateNum = (num) => {
    if (!num || num === '0') return num
    return Number(num) ? Number(num) : ''

  }


  return (
    <div className="page">
      <div className="title">Alex's</div>
      <div className="subtitle">React Calculator!</div>
      <input type="text" name="inputOne" id="num1" onChange={(event) => { setNum1(validateNum(event.target.value)) }} value={num1} />
      <select type="select" id="operator" onChange={(event) => { changeOp(event.target.value) }}>
        <option value="+">+</option>
        <option value="-">-</option>
        <option value="*">*</option>
        <option value="/">/</option>
      </select>
      <input type="text" name="inputTwo" id="num2" onChange={(event) => { setNum2(validateNum(event.target.value)) }} value={num2} />
      <button type="button" onClick={() => { setResult(operation[op]) }}>Calculate!</button>
      <div className="result">{result}</div>
    </div>
  )
}
