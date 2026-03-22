/**
 * ダークモード管理フック
 * 役割: 「照明管理係」 – テーマの状態を localStorage に保存し、html 要素のクラスを操作する。
 * 
 * React の仕組み: useState で状態管理、useEffect で初期化とクラス操作の副作用を分離。
 */
import { useState, useEffect } from 'react'

const useDarkMode = () => {
  // 初期値を localStorage から読み込み、なければシステム設定を参照
  const [isDark, setIsDark] = useState(() => {
    const saved = localStorage.getItem('theme')
    if (saved) return saved === 'dark'
    return window.matchMedia('(prefers-color-scheme: dark)').matches
  })

  useEffect(() => {
    const root = document.documentElement
    if (isDark) {
      root.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      root.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }, [isDark])

  const toggleDarkMode = () => setIsDark(prev => !prev)

  return { isDark, toggleDarkMode }
}

export default useDarkMode