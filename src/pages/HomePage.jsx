/**
 * Home Page – カウンター、入力リアルタイム反映、ダークモード切替のデモ
 * 学べる React 機能:
 *   - useState による状態管理
 *   - カスタムフック (useCounter, useDarkMode) によるロジック分離
 *   - コンポーネントの再利用 (Button, Card, Layout)
 */
import { useState } from 'react'
import Layout from '../components/ui/Layout'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import Input from '../components/ui/Input'
import useCounter from '../hooks/useCounter'

const HomePage = () => {
  const { count, increment, decrement, reset } = useCounter(0)
  const [text, setText] = useState('')

  return (
    <Layout>
      <div className="space-y-8">
        <h1 className="text-3xl font-bold">Home Page</h1>
        <p className="text-gray-600 dark:text-gray-400">
          useState とカスタムフックによる状態管理のデモ
        </p>

        {/* カウンターセクション */}
        <Card>
          <h2 className="text-xl font-semibold mb-4">カウンター (useCounter)</h2>
          <div className="flex items-center space-x-4">
            <Button onClick={decrement}>-</Button>
            <span className="text-2xl font-mono w-12 text-center">{count}</span>
            <Button onClick={increment}>+</Button>
            <Button onClick={reset} variant="secondary">リセット</Button>
          </div>
        </Card>

        {/* リアルタイム入力反映 */}
        <Card>
          <h2 className="text-xl font-semibold mb-4">リアルタイム入力反映</h2>
          <Input
            label="テキストを入力"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="何か入力してください..."
          />
          <p className="mt-2 text-gray-700 dark:text-gray-300">
            入力内容: <span className="font-mono bg-gray-100 dark:bg-gray-700 p-1 rounded">{text || '(空)'}</span>
          </p>
        </Card>

        <Card>
          <h2 className="text-xl font-semibold mb-4">ダークモード切替</h2>
          <p className="mb-2">ヘッダーの🌙/☀️ボタンでダークモードを切り替えられます。</p>
          <p className="text-sm text-gray-500">このテーマ設定は localStorage に保存されます。</p>
        </Card>
      </div>
    </Layout>
  )
}

export default HomePage