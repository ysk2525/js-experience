/**
 * Dashboard Page – データ取得、ローディング状態、検索フィルター
 * 学べる React 機能:
 *   - useEffect と非同期処理
 *   - カスタムフック useFetch によるデータ取得ロジックの分離
 *   - 条件付きレンダリング (ローディング、エラー、データ表示)
 *   - useState とフィルター処理
 */
import { useState } from 'react'
import Layout from '../components/ui/Layout'
import Card from '../components/ui/Card'
import Input from '../components/ui/Input'
import LoadingSpinner from '../components/common/LoadingSpinner'
import { fetchDashboardData } from '../services/api'
import useFetch from '../hooks/useFetch'

const DashboardPage = () => {
  // カスタムフック useFetch を使ってデータ取得
  const { data, loading, error } = useFetch(fetchDashboardData, [])
  const [searchTerm, setSearchTerm] = useState('')

  // フィルタリング処理（データがある場合のみ）
  const filteredData = data
    ? data.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.category.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : []

  return (
    <Layout>
      <div className="space-y-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>

        {loading && <LoadingSpinner />}

        {error && (
          <Card className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
            <p className="text-red-600 dark:text-red-400">エラー: {error}</p>
          </Card>
        )}

        {!loading && !error && data && (
          <>
            <Input
              label="検索 (名前 or カテゴリ)"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="キーワードを入力..."
            />

            <div className="grid gap-4">
              {filteredData.length === 0 ? (
                <Card>該当するデータがありません。</Card>
              ) : (
                filteredData.map(item => (
                  <Card key={item.id} className="hover:shadow-lg transition-shadow">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold">{item.name}</h3>
                        <p className="text-sm text-gray-500 dark:text-gray-400">カテゴリ: {item.category}</p>
                      </div>
                      <span className={`px-2 py-1 text-xs rounded-full ${
                        item.status === '進行中' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300' :
                        item.status === '完了' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300' :
                        'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300'
                      }`}>
                        {item.status}
                      </span>
                    </div>
                  </Card>
                ))
              )}
            </div>
          </>
        )}
      </div>
    </Layout>
  )
}

export default DashboardPage