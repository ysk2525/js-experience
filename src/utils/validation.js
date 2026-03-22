/**
 * フォームバリデーション関数群
 * 役割: 「検査官」 – 入力値のルールに従ってエラーメッセージを生成する。
 */
export const validateContactForm = (values) => {
  const errors = {}

  if (!values.name || values.name.trim() === '') {
    errors.name = 'お名前は必須です'
  } else if (values.name.length < 2) {
    errors.name = '2文字以上で入力してください'
  }

  if (!values.email || values.email.trim() === '') {
    errors.email = 'メールアドレスは必須です'
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = '有効なメールアドレスを入力してください'
  }

  if (!values.message || values.message.trim() === '') {
    errors.message = 'メッセージは必須です'
  } else if (values.message.length < 10) {
    errors.message = '10文字以上で入力してください'
  }

  return errors
}