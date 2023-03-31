import React from 'react'
import { useSelector } from "react-redux"; //To access
import { stateInterface } from '../../../features/user';
import Heading from '../../atoms/Heading';
import KeyAndValueField from '../../molecules/KeyAndValueField';

const Profile = () => {
  
  const user = useSelector((state: stateInterface) => state.user.user.value);
  const themeColor=useSelector((state:stateInterface)=>state.theme.theme.value);

  return (
    <div style={{color:themeColor}}>
        <Heading>Profile Page</Heading>
        <KeyAndValueField keyText='Name' valueText={user.name}   />
        <KeyAndValueField keyText='Age' valueText={user.age.toString()}   />
        <KeyAndValueField keyText='Email' valueText={user.email}   />
    </div>
  )
}

export default Profile