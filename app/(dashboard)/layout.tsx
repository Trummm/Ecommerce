import Navbar from './components/navbar'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-full bg-white text-black'>
      <Navbar />
      {children}
    </div>
  )
}

export default MainLayout
