import React from 'react'
import { GrLocation } from 'react-icons/gr'
import { TbTruckDelivery } from 'react-icons/tb'

const Statistic = () => {
  return (
    <div><div className="bg-green-400/20 py-12">

    <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-10">

        <div className="text-center">

            <div className="flex justify-center items-center gap-3 text-4xl font-bold text-slate-700">

                <TbTruckDelivery className="text-green-500" />

                65K+

            </div>

            <p className="mt-3 text-gray-700">
                Products Delivered
            </p>

        </div>

        <div className="text-center">

            <div className="flex justify-center items-center gap-3 text-4xl font-bold text-slate-700">

                <GrLocation className="text-green-500" />

                100+

            </div>

            <p className="mt-3 text-gray-700">
                Cities & Areas
            </p>

        </div>

    </div>

</div>
</div>
  )
}

export default Statistic