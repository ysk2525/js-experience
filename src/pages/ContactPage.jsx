/**
 * Contact Page – バリデーション付きフォーム、送信後の成功メッセージ表示
 * 学べる React 機能:
 *   - 制御されたコンポーネント (value + onChange)
 *   - カスタムフック useForm によるフォームロジック分離
 *   - 条件付きレンダリング (送信成功時と通常フォーム)
 *   - バリデーション処理の分離
 */
import { useState } from 'react'
import Layout from '../components/ui/Layout'
import Card from '../components/ui/Card'
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'
import useForm from '../hooks/useForm'
import { validateContactForm } from '../utils/validation'

const ContactPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
    validate,
    resetForm,
  } = useForm(
    { name: '', email: '', message: '' },
    validateContactForm
  )

  const handleSubmit = (e) => {
    e.preventDefault()
    if (validate()) {
      // 実際はここで API に送信するが、デモでは成功表示に切り替え
      setIsSubmitted(true)
      resetForm()
    }
  }

  const handleReset = () => {
    resetForm()
    setIsSubmitted(false)
  }

  if (isSubmitted) {
    return (
      <Layout>
        <Card className="text-center">
          <h2 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-4">
            送信完了！
          </h2>
          <p className="mb-6">お問い合わせありがとうございました。担当者よりご連絡いたします。</p>
          <Button onClick={handleReset}>新しいお問い合わせ</Button>
        </Card>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">お問い合わせ</h1>
        <Card>
          <form onSubmit={handleSubmit} noValidate>
            <Input
              label="お名前"
              id="name"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.name && errors.name}
              required
            />
            <Input
              label="メールアドレス"
              type="email"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && errors.email}
              required
            />
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                メッセージ <span className="text-red-500">*</span>
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={values.message}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                  touched.message && errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
                }`}
              />
              {touched.message && errors.message && (
                <p className="mt-1 text-sm text-red-500">{errors.message}</p>
              )}
            </div>

            <div className="flex gap-4">
              <Button type="submit">送信</Button>
              <Button type="button" variant="secondary" onClick={handleReset}>
                リセット
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </Layout>
  )
}

export default ContactPage