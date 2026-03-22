/**
 * カウンターロジックを分離したフック
 * 役割: 「カウンター倉庫」 – カウント値と増減操作をカプセル化し、どの画面でも使い回せる。
 */
import { useState } from 'react'

const useCounter = (initialValue = 0) => {
  const [count, setCount] = useState(initialValue)

  const increment = () => setCount(prev => prev + 1)
  const decrement = () => setCount(prev => prev - 1)
  const reset = () => setCount(initialValue)

  return { count, increment, decrement, reset }
}

export default useCounter