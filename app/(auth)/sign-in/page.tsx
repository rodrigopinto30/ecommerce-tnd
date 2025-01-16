import { Metadata } from 'next'
import { redirect } from 'next/navigation'
import { auth } from '@/auth'
import SeparatorWithOr from '@/components/shared/separator-or'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import CredentialsSignInForm from './creadentials-sign-form'
import { APP_NAME } from '@/lib/constant'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Sign In',
}

export default async function SignIn(props: {
  searchParams: Promise<{
    callbackUrl: string
  }>
}) {
  const searchParams = await props.searchParams
  const { callbackUrl = '/' } = searchParams

  const session = await auth()

  if (session) {
    return redirect(callbackUrl)
  }

  return (
    <div className='w-full'>
      <Card>
        <CardHeader>
          <CardTitle className='text-2xl'>Sign In</CardTitle>
        </CardHeader>
        <CardContent>
          <div>
            <CredentialsSignInForm />
          </div>
        </CardContent>
      </Card>
      <SeparatorWithOr>New to {APP_NAME}</SeparatorWithOr>

      <Link href={`/sign-up?callbackUrl=${encodeURIComponent(callbackUrl)}`}>
        <Button className='w-full' variant='outline'>
          Create your {APP_NAME} account
        </Button>
      </Link>
    </div>
  )
}
