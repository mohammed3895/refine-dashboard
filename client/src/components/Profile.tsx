import { useGetIdentity } from '@pankod/refine-core'
import { Box } from '@pankod/refine-mui'
import { MyProfile } from 'pages'


const Profile = () => {

  const { data: user} = useGetIdentity()

  return (
    <Box>
      <MyProfile 
      type="My"
      icon={''} 
      name={user?.name} 
      avatar={user?.picture} 
      email={user?.email} 
      properties={undefined} 
    />
    </Box>
  )
}

export default Profile