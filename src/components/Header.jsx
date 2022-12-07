import React, { useState } from 'react';
import Logo from '../img/logo.png';
import Avatar from '../img/avatar.png';
import { MdShoppingBasket,MdAdd,MdLogout} from "react-icons/md";
import { motion }from 'framer-motion'
import { Link } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from '../firebase.config';
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';
const Header = () => {

 /* firebase configuration*/ 
  const firebaseAuth =  getAuth(app);
  const provider = new GoogleAuthProvider();


  /* using custom hook dispatch user information*/ 
  const [{user},dispatch] = useStateValue()



  /* showing state menu*/ 
  const [isMenu, setIsMenu] = useState(false);

   /* login functionality*/ 
  const login = async()=>{

  if(!user){
    const {user:{refreshToken,providerData}} = await signInWithPopup(firebaseAuth,provider)
     dispatch({
     type:actionType.SET_USER,
     user: providerData[0],
    });
    localStorage.setItem('user',JSON.stringify(providerData[0]))
  }
  else {
    setIsMenu(!isMenu);
  }

  }
  const logout=() => {
    setIsMenu(false);
    localStorage.clear();
    dispatch({
      type:actionType.SET_USER,
      user: null,
     });

  }


  return(
    
    <header className='fixed z-50 w-screen p-3 px-4 md:p-6 md:px-16 '> 
    {/* ----------------------------desktop & Tablet ----------------------------------------------*/}
        <div className='hidden md:flex w-full h-full items-center justify-between'>

        {/* ----------------------------start logo ----------------------------------------------*/}
        <Link to={"/"} className= 'flex items-center gap-2'>
             <img src ={Logo} className="w-8 object-cover" alt="logo"/>
             <p className="text-headingColor text-xl font-bold"> City</p>
        </Link>
         {/* ---------------------------- end logo ----------------------------------------------*/}


       <div className='flex items justify-center gap-8 '>
         {/* --------------------------- start Menu ----------------------------------------------*/}
         <motion.ul initial = {{opacity:0,x:200}} 
          animate = {{opacity:1,x:0}}
          exit = {{opacity:0,x:200}}
          className='flex items-center gap-8 '>
            <li className='test-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Home</li>
            <li className='test-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Menu</li>
            <li className='test-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>About us</li>
            <li className='test-base text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Services</li>
        </motion.ul>
        {/* ---------------------------End Menu ----------------------------------------------*/}


         {/* --------------------------- cart items ----------------------------------------------*/}
        <div className='relative flex itmes-center justify-center'>
        < MdShoppingBasket className='text-textColor text-3xl ml-8 cursor-pointer' />
        <div className='absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
        <p className='text-xs text- white font-semibold'>2</p>
        </div>

        </div>
       
       {/* --------------------------- userprofile start----------------------------------------------*/}
      <div className='relative'>
      <motion.img whileTap= {{scale:0.6}} 
       src = {user ? user.photoURL : Avatar} 
       className="w-8 min-w-[30px] h-8 min-h-[30px] drop-shadow-xl cursor-pointer rounded-full "
        alt ="userprofile"
        onClick={login}/>
                 {/* --------------------------- user dropdown List ----------------------------------------------*/}

        {
          isMenu && (
            <motion.div initial = {{opacity:0,scale:0.6}} 
            animate = {{opacity:1,scale:1}}
            exit = {{opacity:0,scale:0.6}}
            
            className=' flex flex-col w-40 bg-gray-50 shadow-xl rounded-lg absolute px-4 py-2 top-10 right-0'>
          {
           user && user.email === "shabanu08@gmail.com" && (
            <Link to = {'/createItem'}>
             <p className=' flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text text-textColor text-base'> New Item <MdAdd/> </p>
             </Link>
           )
          }
             
            <p className=' flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text-base px-4 py-2 ' onClick={logout}>Logout <MdLogout/></p>     
        </motion.div>
          )
        }
      </div>
        {/* --------------------------- userprofile end ----------------------------------------------*/}

        {/* --------------------------- end cart ----------------------------------------------*/}
       </div>

     </div> {/* --------------------------- end desktop  ----------------------------------------------*/}




     {/*----------------------------------------start  Mobile ------------------------------- */}
     <div className='flex items-center justify-between md:hidden w-full h-full'>
     <div className='relative flex itmes-center justify-center'>
        < MdShoppingBasket className='text-textColor text-3xl ml-8 cursor-pointer' />
        <div className='absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
        <p className='text-xs text- white font-semibold'>2</p>
        </div>

        </div>
     <Link to={"/"} className= 'flex items-center gap-2'>
             <img src ={Logo} className="w-8 object-cover" alt="logo"/>
             <p className="text-headingColor text-xl font-bold"> City</p>
        </Link>
        {/* --------------------------- userprofile start----------------------------------------------*/}
        <div className='relative'>
      <motion.img whileTap= {{scale:0.6}} 
       src = {user ? user.photoURL : Avatar} 
       className="w-8 min-w-[30px] h-8 min-h-[30px] drop-shadow-xl cursor-pointer rounded-full "
        
        onClick={login}/>
                 {/* --------------------------- user dropdown List ----------------------------------------------*/}

        {
          isMenu && (
            <motion.div initial = {{opacity:0,scale:0.6}} 
            animate = {{opacity:1,scale:1}}
            exit = {{opacity:0,scale:0.6}}
            
            className=' flex flex-col w-40 bg-gray-50 shadow-xl rounded-lg absolute px-4 py-2 top-10 right-0'>
          {
           user && user.email === "shabanu08@gmail.com" && (
            <Link to = {'/createItem'}>
             <p className=' flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-in-out text text-textColor text-base'> New Item <MdAdd/> </p>
             </Link>
           )
          }

           {/* --------------------------- start Menu ----------------------------------------------*/}
         <ul className='flex flex-col  '>
            <li className='test-base  py-2  hover:bg-slate-100 text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Home</li>
            <li className='test-base  py-2  hover:bg-slate-100 text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Menu</li>
            <li className='test-base  py-2  hover:bg-slate-100 text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>About us</li>
            <li className='test-base  py-2  hover:bg-slate-100 text-textColor hover:text-headingColor duration-100 transition-all ease-in-out cursor-pointer'>Services</li>
        </ul>
        {/* ---------------------------End Menu ----------------------------------------------*/}

             
            <p className=' m-2 p-2 rounded -md shadow-md flex items-center justify-center bg-gray-200 gap-3 cursor-pointer hover:bg-gray-300 transition-all duration-100 ease-in-out text-base' onClick={logout}>Logout <MdLogout/></p>     
        </motion.div>
          )
        }
      </div>
        {/* --------------------------- userprofile end ----------------------------------------------*/}

      
       </div>
    
    {/* ----------------------------end main ----------------------------------------------*/}
    </header>   
      )
};
export default Header;