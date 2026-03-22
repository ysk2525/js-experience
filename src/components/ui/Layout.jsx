/**
 * 全体レイアウト (ヘッダー、ナビゲーション、フッター、ダークモード切替)
 * 役割: 「建物の構造」 – 全ページ共通の枠組みを提供し、中身（children）だけを差し替える。
 */
import { Link } from 'react-router-dom'
import { Sun, Moon } from 'lucide-react'
import useDarkMode from '../../hooks/useDarkMode'
import Button from './Button'

const Layout = ({ children }) => {
  const { isDark, toggleDarkMode } = useDarkMode()

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <header className="bg-white dark:bg-gray-800 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold text-blue-600 dark:text-blue-400">
            React Sample
          </Link>
          <nav className="space-x-4">
            <Link to="/" className="hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
            <Link to="/dashboard" className="hover:text-blue-600 dark:hover:text-blue-400">Dashboard</Link>
            <Link to="/contact" className="hover:text-blue-600 dark:hover:text-blue-400">Contact</Link>
          </nav>
          <Button
            variant="outline"
            onClick={toggleDarkMode}
            className="p-2"
            aria-label="Toggle dark mode"
          >
            {isDark ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
        </div>
      </header>
      <main className="flex-grow container mx-auto px-4 py-8">
        {children}
      </main>
      <footer className="bg-white dark:bg-gray-800 shadow-inner py-4 text-center text-sm text-gray-500 dark:text-gray-400">
        © 2025 React Sample – 疎結合設計デモ
      </footer>
    </div>
  )
}

export default Layout