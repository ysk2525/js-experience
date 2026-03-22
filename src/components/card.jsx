/**
 * カードコンポーネント – コンテンツを囲む共通の枠
 * 役割: 「展示ケース」 – 中身を綺麗に包み、影や余白を与える。
 */
const Card = ({ children, className = '' }) => {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 ${className}`}>
      {children}
    </div>
  )
}

export default Card