
import Navbar from '../components/navbar';
import InputForm from '../components/InputForm';
import { useUser } from '@auth0/nextjs-auth0/client';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import Landing from '@/components/Landing';

export default function Index() {
  const { user, isLoading, error } = useUser()
  if (isLoading) return <div>Loading...</div>;

  if (user) {
    return (
      <>
        <Navbar resource="Tournament" />
        <InputForm /> 
      </>
    )
  } else {
    return (
      <>
        <Landing />
      </>
    )
  }
}
