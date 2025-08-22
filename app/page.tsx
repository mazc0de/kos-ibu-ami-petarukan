import Navbar from '@/components/Navbar'
import Image from 'next/image'

const App = () => {
  return (
    <>
      <Navbar />
      <main className='bg-ivory px-32 pt-[100px]'>
        <section id='home' className='flex w-full justify-between'>
          <div className='relative h-[280px] w-[480px]'>
            <Image
              src='/images/blob-header.svg'
              alt='blob-header'
              width={480}
              height={280}
              className='absolute -z-[1px]'
            />
            <div className='absolute top-24 left-12'>
              <p className='text-coffee text-4xl font-semibold'>
                KOS IBU AMI PETARUKAN
              </p>
            </div>
            <div className='absolute top-64 left-12'>
              <p className='text-coffee text-base font-semibold'>
                Jalan Perwira No.51 Kec. Petarukan <br /> Kab. Pemalang
              </p>
            </div>
          </div>
          <Image
            src='/images/halaman-depan-kos.webp'
            alt='halaman-depan-kos'
            width={480}
            height={484}
            className='rounded-bl-[60px]'
          />
        </section>
      </main>
    </>
  )
}

export default App
