/**
 * 汎用ボタンコンポーネント
 * 役割: 「受付カウンター」のようなもの – 外から渡された props に従って見た目と動作を決める。
 */
import { forwardRef } from 'react'

const Button = forwardRef(({
  children,
  onClick,
  variant = 'primary', // 'primary', 'secondary', 'outline'
  disabled = false,
  type = 'button',
  className = '',
  ...props
}, ref) => {
  const baseClasses = 'px-4 py-2 rounded font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2'
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-800 hover:bg-gray-300 dark:bg-gray-700 dark:text-gray-200 dark:hover:bg-gray-600 focus:ring-gray-500',
    outline: 'border border-gray-300 bg-transparent hover:bg-gray-50 dark:border-gray-600 dark:hover:bg-gray-800 focus:ring-gray-500',
  }

  return (
    <button
      ref={ref}
      type={type}
      className={`${baseClasses} ${variants[variant]} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
})

Button.displayName = 'Button'
export default Button