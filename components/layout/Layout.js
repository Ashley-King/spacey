import util from '../../styles/utilities.module.css'

export default function Layout({children}){
  return(
    <>
      <main className={util.container}>{children}</main>
    </>
  )
}