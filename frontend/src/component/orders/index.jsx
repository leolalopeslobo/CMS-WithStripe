import React from 'react'
import { getOrderStatus } from '../getorderstatus/getOrderStatus';

const recentOrdersData = [
    {
        id: '1',
        product_id: '5674',
        plan_start_date: '2022-05-17T07:14:04',
        plan_end_date: '2022-06-17T07:14:04',
        current_plan_status: 'NOT ACTIVE',
        plan_name: 'SOC',
        plan_type: 'Monthly'
    },
    {
        id: '2',
        product_id: '7356',
        plan_start_date: '2022-05-14T05:14:04',
        plan_end_date: 'Lifetime',
        current_plan_status: 'ACTIVE',
        plan_name: 'Vulnerability Assessment',
        plan_type: '-'
    },
    {
        id: '3',
        product_id: '2846',
        plan_start_date: '2022-05-17T07:14:04',
        plan_end_date: '2023-05-17T07:14:04',
        current_plan_status: 'ACTIVE',
        plan_name: 'Brand Monitoring',
        plan_type: 'Annually'
    },
    {
        id: '4',
        product_id: '4738',
        plan_start_date: '2022-05-17T07:14:04',
        plan_end_date: 'Lifetime',
        current_plan_status: 'ACTIVE',
        plan_name: 'Compliance',
        plan_type: '-'
    }
]

const Orders = () => {
    return (
        <div className="bg-white px-4 pt-3 rounded-sm border dorder border-grey-200 flex-1 my-2">
            <h1 className="text-grey-700 font-medium text-4xl font-bold text-lg font-bold text-[#4f46e5]"><strong>Recent Orders</strong></h1>
            {/* Mapping is used to display all the details */}
            <div className="mt-3">
                <table className="w-full text-grey-700">
                    <thead>
                        <tr>
                        <td className='text-600 font-bold'>Product ID</td>
                        <td className='text-600 font-bold'>Service Plan</td>
                        <td className='text-600 font-bold'>Plan Type</td>
                        <td className='text-600 font-bold'>Plan Start Date</td>
                        <td className='text-600 font-bold'>Plan End Date</td>
                        <td className='text-600 font-bold'>Status</td>
                        </tr>
                    </thead>
                    <tbody>
                        {recentOrdersData.map((order)=>(
                            <tr key={order.id}>
                                <td>{order.product_id}</td>
                                <td>{order.plan_name}</td>
                                <td>{order.plan_type}</td>
                                <td>{new Date(order.plan_start_date).toLocaleDateString()}</td>
                                <td>{order.plan_end_date === 'Lifetime'
    ? 'Lifetime'
    : new Date(order.plan_end_date).toLocaleDateString()
  }</td>
                                <td>{getOrderStatus(order.current_plan_status)}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
           
            {/* {recentOrdersData.map((order) => (<div>{order.product_id}</div>))} */}
            </div>
        </div>
    )
};

export default Orders;