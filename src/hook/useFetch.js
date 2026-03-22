/**
 * データ取得とローディング状態を管理する汎用フック
 * 役割: 「データ倉庫番」 – APIからデータを取得し、ローディング中・エラー状態を一括管理する。
 * 
 * 使用例: const { data, loading, error } = useFetch(() => fetchItems())
 */
import { useState, useEffect } from 'react'

const useFetch = (fetchFunction, dependencies = []) => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isMounted = true
    const fetchData = async () => {
      setLoading(true)
      setError(null)
      try {
        const result = await fetchFunction()
        if (isMounted) setData(result)
      } catch (err) {
        if (isMounted) setError(err.message || 'データ取得に失敗しました')
      } finally {
        if (isMounted) setLoading(false)
      }
    }

    fetchData()
    return () => { isMounted = false }
  }, dependencies) // 依存配列により再フェッチを制御

  return { data, loading, error }
}

export default useFetch