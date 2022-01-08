import util from '../../styles/utilities.module.css'
import NavBar from '../navigation/NavBar'
export default function Layout({children}){
  return(
    <>
      <NavBar />
      <main className={util.container}>{children}</main>
    </>
  )
}