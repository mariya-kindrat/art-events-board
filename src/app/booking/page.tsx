import React from 'react'

const BookingPage = () => {
  return (
    <div className='p-4 lg:px-20 xl:px-40'>
      <table className='w-full border-separate border-spacing-3'>
        <thead>
          <tr className='text-left'>
            <th className='hidden md:block'>Booking ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className='hidden md:block'>Events</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          <tr className='text-sm md:text-base odd:bg-gray-100'>
            <td className='hidden md:block py-6 px-1'>112434535</td>
            <td className='py-6 px-1'>12.05.2025</td>
            <td className='py-6 px-1'>100$</td>
            <td className='hidden md:block py-6 px-1'>SeaShels event!</td>
            <td className='py-6 px-1'>Booked</td>
          </tr>
          <tr className='text-sm md:text-base bg-red-50'>
            <td className='hidden md:block py-6 px-1'>112434535</td>
            <td className='py-6 px-1'>12.05.2025</td>
            <td className='py-6 px-1'>100$</td>
            <td className='hidden md:block py-6 px-1'>SeaShels event!</td>
            <td className='py-6 px-1'>Booked</td>
          </tr>
          <tr className='text-sm md:text-base odd:bg-gray-100'>
            <td className='hidden md:block py-6 px-1'>112434535</td>
            <td className='py-6 px-1'>12.05.2025</td>
            <td className='py-6 px-1'>100$</td>
            <td className='hidden md:block py-6 px-1'>SeaShels event!</td>
            <td className='py-6 px-1'>Booked</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default BookingPage;