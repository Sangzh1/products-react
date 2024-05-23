import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import BarChartIcon from '@mui/icons-material/BarChart';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import { useGlobalContext } from '../hooks/useGlobalContext';
import { signOut } from 'firebase/auth'
import { auth } from '../firebase/firebaseConfig' 
import { toast } from 'react-toastify';

function Sidebar() {
  const { user, dispatch } = useGlobalContext();
  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("Signout succesfully");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error(error.message);
      });
  };


  return (
    <div className='w-[264px] bg-slate-950 py-[19px] px-[22px]'>
      <div className='h-[340px]'>
        <div className='bg-slate-700 flex items-center py-3 px-4 rounded-2xl mb-5'>
          <div className='mr-[15px]'>
            <AccountCircleIcon/>
          </div>
          <p className='text-white'>
            {user.displayName}
          </p>
        </div>
        <hr className='mb-5'/>
        <Link to='/' className='w-[264px] py-[9px] px-[22px] flex items-center'>
          <div className='bg-slate-700 p-2 flex items-center justify-center w-[30px] h-[30px] rounded-xl mr-[15px]'>
            <HomeIcon className='text-sky-500'/>
          </div>
          <p className='text-white'>
            Dashboard
          </p>
        </Link>
        <Link to='/products' className='w-[264px] py-[9px] px-[22px] flex items-center mb-6'>
          <div className='bg-slate-700 p-2 flex items-center justify-center w-[30px] h-[30px] rounded-xl mr-[15px]'>
            <BarChartIcon className='text-sky-500'/>
          </div>
          <p className='text-white'>
            Products
          </p>
        </Link>
        <h4 className='text-white mb-6'>ACCOUNT PAGES</h4>
        <Link to='/login' className='w-[264px] py-[9px] px-[22px] flex items-center'>
          <div className='bg-slate-700 p-2 flex items-center justify-center w-[30px] h-[30px] rounded-xl mr-[15px]'>
            <InsertDriveFileIcon className='text-sky-500'/>
          </div>
          <p className='text-white'>
            Sign Up
          </p>
        </Link>
        <button onClick={logout} data-tip="Logout" className='w-[264px] py-[9px] px-[22px] flex items-center mb-6'>
          <div className='bg-slate-700 p-2 flex items-center justify-center w-[30px] h-[30px] rounded-xl mr-[15px]'>
            <RocketLaunchIcon className='text-sky-500'/>
          </div>
          <p className='text-white'>
            Log Out
          </p>
        </button>
      </div>
    </div>
  )
}

export default Sidebar