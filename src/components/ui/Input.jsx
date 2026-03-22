/**
 * 再利用可能な入力フィールド
 * 役割: 「情報受付窓口」 – 入力値やエラーを外から受け取り、変更を外に伝える。
 */
import { forwardRef } from 'react'

const Input = forwardRef(({
  label,
  type = 'text',
  id,
  name,
  value,
  onChange,
  onBlur,
  error,
  required = false,
  placeholder = '',
  className = '',
  ...props
}, ref) => {
  return (
    <div className="mb-4">
      {label && (
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          {label} {required && <span className="text-red-500">*</span>}
        </label>
      )}
      <input
        ref={ref}
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
        placeholder={placeholder}
        className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${error ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} ${className}`}
        {...props}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  )
})

Input.displayName = 'Input'
export default Input