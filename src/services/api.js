/**
 * 擬似API通信モジュール
 * 役割: 「外部データ倉庫」 – 実際のAPI呼び出しを模擬し、フロントエンドからは非同期関数として利用する。
 */
const mockDashboardData = [
  { id: 1, name: 'プロジェクト Alpha', category: '開発', status: '進行中' },
  { id: 2, name: 'デザイン刷新', category: 'デザイン', status: '完了' },
  { id: 3, name: 'バグ修正 #42', category: '保守', status: '保留' },
  { id: 4, name: '新機能: ダークモード', category: '開発', status: '進行中' },
  { id: 5, name: 'ユーザー調査', category: 'リサーチ', status: '計画中' },
]

// ダッシュボード用データ取得 (遅延を入れてローディング状態を確認できるように)
export const fetchDashboardData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(mockDashboardData)
    }, 1000) // 1秒遅延
  })
}