import Study from '@/components/Study'
import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <main className='flex w-full flex-center flex-col gap-35 min-h-screen'>
      <section className='flex flex-col max-md:w-full max-w-screen-lg p-10 gap-6 md:gap-10'>
        
        <h1 className="text-center h1-normal font-light max-md:text-left max-md:leading-[60px]">
          <span>Khoá Học Làm </span>
          <span className=" bg-gradient-to-r from-blue-600 to-violet-600 text-white"> Website </span>
          <span className="font-extrabold"> Cấp Tốc Cho Người Mới <span className='max-md:hidden'>🚀</span> Bắt Đầu </span>
          <span className='hidden md:inline-flex'>🚀</span>
        </h1>

        <div className='p-5 md:mx-10 rounded-xl bg-gradient-to-r from-gray-700 via-gray-900 to-black'>
          <p className='p-20-normal text-center text-white'>
            Với 70% khóa học hoàn toàn MIỄN PHÍ, đây là cơ hội tuyệt vời để tiếp cận kỹ năng lập trình web chuyên nghiệp của bạn. 30% khóa học còn lại sẽ cung thực chiến nâng cao dành cho những ai muốn trở thành chuyên gia web."
          </p>
        </div>

        <Study></Study>

      </section>

      <div className='flex flex-col max-md:w-full p-10 gap-6 md:gap-10 max-w-screen-md'>
        <h2 className='h2-normal text-center'>
          Công cụ phát triển <span className='h2-bold'>NEXTjs 14 Là gì?</span>
        </h2>
        <p className='text-center font-extralight text-[10px] leading-[30px] lg:text-[18px] mx-50'>
          Nextjs 14 là công cụ phát triển <span className='font-bold'>website tĩnh</span> được phát xây dựng bởi Vercel, <span className='font-bold'>nhanh hơn 53% thời gian khởi động</span> máy chủ cục bộ, nhanh hơn 94% thời gian cập nhật code với Fast Refresh, hỗ trợ xây dựng <span className='font-bold'>backend với SeverAction</span>.
        </p>

      </div>

      <Image
        src='/images/master.jpg'
        alt='master'
        width={1920}
        height={1080}
      ></Image>

      <div className='w-full flex-center -mt-4 md:-mt-10 bg-black-100'>
        <div className='flex-center flex-col w-full p-10 md:p-20 gap-20 z-0'>

          <h2 className='flex-center text-center h2-bold text-white mt-20'>
            KHOÁ HỌC KHÔNG CHỈ DÀNH CHO
          </h2>

          <div className='bg-grey-100 rounded-md flex gap-4 px-7 py-4'>
            <Image
              src={'/images/x.png'}
              alt='x'
              width={50}
              height={15}
              className='md:hidden'
            ></Image>
            <h2 className='h2-bold bg-gradient-to-r from-red-600 to-red-500 bg-clip-text text-transparent'>Beginners</h2>
            <Image
              src={'/images/x.png'}
              alt='x'
              width={50}
              height={15}
              className='md:hidden'
            ></Image>
          </div>

          <h2 className='flex-center text-center h2-bold text-white'>
            Có theo học nếu...
          </h2>

          <div className='flex max-md:flex-col gap-9'>
            <div className='bg-grey-100 rounded-md items-center flex gap-4 px-7 py-4'>

              <h2 className='text-center h2-bold bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent'>Mới Bắt đầu tiếp cận</h2>

            </div>

            <div className='bg-grey-100 rounded-md items-center flex gap-4 px-7 py-4'>

              <h2 className='text-center h2-bold bg-gradient-to-r from-blue-500 to-violet-600 bg-clip-text text-transparent'>Có nền tảng về html/css</h2>

            </div>

            <div className='bg-grey-100 rounded-md items-center flex gap-4 px-7 py-4'>

              <h2 className='text-center h2-bold bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent'>Tối ưu hoá hiệu suất</h2>

            </div>
          </div>

          <h2 className='flex-center text-center h2-bold text-white'>
            Vậy thì...
          </h2>

          <h2 className='flex-center text-center h2-bold bg-gradient-to-r from-green-400 to-green-300 bg-clip-text text-transparent'>
            <Image src={'/images/checkmark.png'} width={60} height={60} alt='tick'></Image>
              KHOÁ HỌC NÀY PHÙ HỢP VỚI BẠN.
          </h2>

          <div className='flex-center relative group mt-4'>
            <div className="absolute -inset-3 bg-gradient-to-r from-blue-600 to-blue-300 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
            <Image src={'/images/dev.jpg'} width={500} height={500} alt='v' className='relative'></Image>
          </div>

        </div>
      </div>

    </main>
  )
}

export default page