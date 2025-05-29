import { signIn } from '@/auth';
import Button from '../ui/button';

export default function SignIn() {
  return (
    <form
      action={async () => {
        'use server';
        await signIn('github', { redirectTo: '/' });
      }}
    >
      <Button type="submit">Sign in</Button>
    </form>
  );
}
