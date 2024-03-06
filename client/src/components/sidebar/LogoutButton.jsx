import React from 'react'
import LogoutIcon from '@mui/icons-material/Logout';
import useLogout from '../../hooks/useLogout';
const LogoutButton = () => {
  const {loading, logout} = useLogout()
  return (
    <div className=' flex mt-auto items-start justify-start'>
        {!loading ? (
          <LogoutIcon className='w-6 h-6 text-white cursor-pointer'
          onClick ={logout}
          />
        ): (
         <span className="loading loading-infinity loading-lg"></span>
        )}
    </div>
  )
}

export default LogoutButton