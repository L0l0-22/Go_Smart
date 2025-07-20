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
                Streamline and integrate your business operations with our comprehensive ERP solutions. Manage finance, inventory, HR, and supply chains efficiently, ensuring data accuracy and real-time insights to support strategic decisions and scale growth across departments.
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
                Enhance logistics operations with real-time tracking, automation, and route optimization. Our system coordinates shipments, manages warehouses, and improves delivery accuracy while reducing costs and supporting customer satisfaction across your logistics ecosystem.
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
                Improve patient care and simplify healthcare management with tools like EHR, scheduling, billing, and analytics. Our solution enhances operational efficiency, ensures data compliance, and empowers providers to deliver faster and more personalized medical services.
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
                Streamline real estate operations with software designed for property sales, leasing, accounting, and marketing. Manage assets, improve communication with clients, and gain real-time insights to optimize both residential and commercial property portfolios.
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
                Manage sales, inventory, and customer interactions seamlessly with our software for retail and F&B. Features include POS systems, cloud kitchen integration, self-ordering kiosks, and loyalty tools to enhance operations and deliver standout experiences.
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
