import React from 'react'
import erp1 from "../assets/erp1.png";
import health1 from "../assets/health1.png";
import food1 from "../assets/food1.png";
import logistic1 from "../assets/logistic1.png";
import realState1 from "../assets/realState1.png";
export default function ItSolutions() {
  return (
    <div className="py-12 px-4 bg-[#F8FAFF] mt-20" >
      <div className="max-w-[85%] container mx-auto">
        <h1
          className="text-main text-4xl font-medium"
        >
          IT Solution
        </h1>
        <div className='flex flex-col gap-10'>
            <div className="bg-white rounded-3xl px-6 py-12 lg:px-6 lg:py-6 flex flex-col lg:flex-row justify-between mt-5"
              style={{
                boxShadow: '8px 8px 6px #DAE8FF' 
              }}>
              <div className='w-full lg:w-2/3 space-y-5 mb-10 lg:mt-5 md:ml-5'>
              <h3 className='text-main text-2xl md:text-4xl font-medium '>ERP SYSTEM</h3>
              <p className="text-base md:text-xl max-w-3xl font-normal text-gray-400 leading-[2rem] md:leading-[2rem]">
                Streamline And Integrate Your Business Operations With Our Comprehensive ERP Solutions. Manage Finance, Inventory, Human Resources, And Supply Chains Efficiently, Ensuring Data Accuracy And Real-Time Insights. Our ERP Systems Enhance Productivity, Support Informed Decision-Making, And Drive Business Growth.
               </p>
               <div className='flex text-forth flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-14 text-sm md:text-base font-normal'>
                  <div className='space-y-3 '>
                    <p>Accounting</p>
                    <p>Sales & Purchasing</p>
                    <p>Inventory Management</p>
                    <p>Human Resources</p>
                  </div>
                  <div className='space-y-3 '>
                    <p>CRM</p>
                    <p>Project Management</p>
                    <p>Manufacturing</p>
                    <p>Help Desk</p>
                  </div>
               </div>
            </div>
            <div className='w-full lg:w-1/3'>
              <img src={erp1} alt="Go Smart erp"/>
            </div>
            </div>

            <div className="bg-white rounded-3xl px-6 py-12 lg:px-6 lg:py-6 flex flex-col lg:flex-row justify-between mt-5"
              style={{
                boxShadow: '8px 8px 6px #DAE8FF' 
              }}>
              <div className='w-full lg:w-1/3'>
                <img src={logistic1} alt="Go Smart logistic"/>
              </div>
              <div className='w-full lg:w-2/3 space-y-5 mt-10 lg:mt-5 md:ml-5 lg:ml-0 lg:pl-16'>
              <h3 className='text-main text-2xl md:text-4xl font-medium '>LOGISTIC MANAGEMENT</h3>
              <p className="text-base md:text-xl max-w-3xl font-normal text-gray-400 leading-[2rem] md:leading-[2rem]">
                Enhance Logistics Operations With Real-Time Tracking, Automated Workflows, And Route Optimization. Our System Ensures Seamless Coordination Of Shipments, Inventory, And Warehouse Management, Reducing Operational Costs And Improving Delivery Accuracy For Better Customer Satisfaction.
               </p>
               <div className='flex text-forth flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-14 text-sm md:text-base font-normal'>
                  <div className='space-y-3 '>
                    <p>Order Management</p>
                    <p>Freight Management</p>
                    <p>Inventory & Warehouse Management</p>
                    <p>Transportation Management</p>
                  </div>
                  <div className='space-y-3 '>
                    <p>Accounting</p>
                    <p>Billing & Invoicing</p>
                    <p>Help Desk</p>
                    <p>CRM, HR</p>
                  </div>
               </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl px-6 py-12 lg:px-6 lg:py-6 flex flex-col lg:flex-row justify-between mt-5"
              style={{
                boxShadow: '8px 8px 6px #DAE8FF' 
              }}>
              <div className='w-full lg:w-2/3 space-y-5 mb-10 lg:mt-5 lg:ml-5'>
              <h3 className='text-main text-2xl md:text-4xl font-medium '>HEALTHCARE</h3>
              <p className="text-base md:text-xl max-w-3xl font-normal text-gray-400 leading-[2rem] md:leading-[2rem]">
                Improve Patient Care And Streamline Administrative Tasks With Our Healthcare Management Solutions. Features Include Appointment Scheduling, Electronic Health Records, Billing Management, And Reporting Tools. Enhance Operational Efficiency, Ensure Compliance, And Deliver Better Patient Experiences.
               </p>
               <div className='flex text-forth flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-14 text-sm md:text-base font-normal'>
                  <div className='space-y-3 '>
                    <p>Order Patient Registration & Management</p>
                    <p>Freight Management</p>
                    <p>Laboratory InfAppointment Scheduling Edical Tests</p>
                    <p>Reporting And Analytics</p>
                  </div>
                  <div className='space-y-3 '>
                    <p>Accounting</p>
                    <p>Billing & Invoicing</p>
                    <p>Help Desk</p>
                    <p>CRM, HR</p>
                  </div>
               </div>
            </div>
            <div className='w-full lg:w-1/3'>
              <img src={health1} alt="Go Smart health"/>
            </div>
            </div>

            <div className="bg-white rounded-3xl px-6 py-12 lg:px-6 lg:py-6 flex flex-col lg:flex-row justify-between mt-5"
              style={{
                boxShadow: '8px 8px 6px #DAE8FF' 
              }}>
              <div className='w-full lg:w-1/3'>
                <img src={realState1} alt="Go Smart real state"/>
              </div>
              <div className='w-full lg:w-2/3 space-y-5 mt-10 lg:mt-5 md:ml-5 lg:ml-0 lg:pl-16'>
              <h3 className='text-main text-2xl md:text-4xl font-medium '>REAL ESTATE</h3>
              <p className="text-base md:text-xl max-w-3xl font-normal text-gray-400 leading-[2rem] md:leading-[2rem]">
                Simplify Property Management With Solutions Designed For Leasing, Sales, Maintenance, And Client Relationships. Our System Streamlines Operations, Improves Communication With Clients, And Provides Real-Time Insights, Ensuring Efficient Management Of Residential And Commercial Properties.
               </p>
               <div className='flex text-forth flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-14 text-sm md:text-base font-normal'>
                  <div className='space-y-3 '>
                    <p>Operations</p>
                    <p>Freight Management</p>
                    <p>Sales & Purchasing</p>
                    <p>Accounting</p>
                  </div>
                  <div className='space-y-3 '>
                    <p>Marketing</p>
                    <p>CRM</p>
                    <p>Help Desk</p>
                    <p>CRM</p>
                  </div>
               </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl px-6 py-12 lg:px-6 lg:py-6 flex flex-col lg:flex-row justify-between mt-5"
              style={{
                boxShadow: '8px 8px 6px #DAE8FF' 
              }}>
              <div className='w-full lg:w-2/3 space-y-5 mb-10 lg:mt-5 lg:ml-5'>
              <h3 className='text-main text-2xl md:text-4xl font-medium '>ERP RETAIL ... FOOD & BEVERAGE</h3>
              <p className="text-base md:text-xl max-w-3xl font-normal text-gray-400 leading-[2rem] md:leading-[2rem]">
                Optimize Operations With Our All-In-One Software For Retail And F&B Businesses. Manage Inventory, Sales, And Customer Engagement Effortlessly. Our Solutions Feature Advanced POS Systems, Cloud Kitchen Management, Self-Ordering Kiosks, And Self-Service Technologies To Enhance Efficiency And Deliver Superior Customer Experiences.
               </p>
               <div className='flex text-forth flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-14 text-sm md:text-base font-normal'>
                  <div className='space-y-3 '>
                    <p>Point Of Sale</p>
                    <p>Self-Ordering</p>
                    <p>Cloud Kitchen</p>
                  </div>
                  <div className='space-y-3 '>
                    <p>Billing & Invoicing</p>
                    <p>CRM</p>
                    <p>Hypermarkets</p>
                  </div>
                  <div className='space-y-3 '>
                    <p>Restaurants</p>
                    <p>Retail Stores</p>
                    <p>Accounting</p>
                  </div>
               </div>
            </div>
            <div className='w-full lg:w-1/3'>
              <img src={food1} alt="Go Smart pos"/>
            </div>
            </div>
        </div>
      </div>
    </div>
  )
}
