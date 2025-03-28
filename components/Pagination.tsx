import React from 'react'
import Link from 'next/link'
const Pagination = ({page,pageSize, totalItems}: {
    page: number,pageSize: number, totalItems: number
}) => {
    const totalPages = Math.ceil(totalItems/pageSize)
    return (
        <section className='container mx-auto flex justify-center items-center my-8'>
          {page > 1 ? (
            <Link
              className='mr-2 px-2 py-1 border border-gray-300 rounded'
              href={`/properties?page=${Number(page) - 1}`}
            >
              Previous
            </Link>
          ) : null}
    
          <span className='mx-2'>
            {' '}
            Page {Number(page)} of {totalPages}
          </span>
    
          {Number(page) < totalPages ? (
            <Link
              className='ml-2 px-2 py-1 border border-gray-300 rounded'
              href={`/properties?page=${Number(page) + 1}`}
            >
              Next
            </Link>
          ) : null}
        </section>
      );
}

export default Pagination