/**
 * フォーム状態＋バリデーションを管理するフック
 * 役割: 「フォーム受付係」 – 入力値の保持、変更時のバリデーション、送信時の一括チェックを行う。
 * 
 * React の仕組み: useState で各フィールドの値とエラーを管理し、handleChange と validate で更新。
 */
import { useState, useCallback } from 'react'

const useForm = (initialValues, validateFunction) => {
  const [values, setValues] = useState(initialValues)
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})

  const handleChange = (e) => {
    const { name, value } = e.target
    setValues(prev => ({ ...prev, [name]: value }))
    // 入力中にバリデーションを走らせたい場合（オプション）
    if (validateFunction) {
      const newErrors = validateFunction({ ...values, [name]: value })
      setErrors(prev => ({ ...prev, [name]: newErrors[name] }))
    }
  }

  const handleBlur = (e) => {
    const { name } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
    // blur 時にバリデーション
    if (validateFunction) {
      const newErrors = validateFunction(values)
      setErrors(newErrors)
    }
  }

  const validate = useCallback(() => {
    if (!validateFunction) return true
    const newErrors = validateFunction(values)
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }, [values, validateFunction])

  const resetForm = () => {
    setValues(initialValues)
    setErrors({})
    setTouched({})
  }

  return {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    validate,
    resetForm,
    setValues,
  }
}

export default useForm