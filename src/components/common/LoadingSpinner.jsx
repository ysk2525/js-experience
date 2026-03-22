/**
 * ローディング表示用コンポーネント
 * 役割: 「準備中」の合図 – データ取得中にユーザーへ待機を伝える。
 */
const LoadingSpinner = () => {
  return (
    <div className="flex justify-center items-center py-10">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 dark:border-blue-400"></div>
    </div>
  )
}

export default LoadingSpinner