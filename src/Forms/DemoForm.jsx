// src/components/DemoForm.js

import React, { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';

// Import all icons
import CRM from '../assets/crm.png';
import Sales from '../assets/sales.png';
import Invoicing from '../assets/invoicing.png';
import Expenses from '../assets/Expenses.png';
import Inventory from '../assets/Inventory.png';
import Accounting from '../assets/Accounting.png';
import Purchase from '../assets/Purchase.png';
import Employees from '../assets/Employees.png';
import Recruitment from '../assets/Recruitment.png';
import Project from '../assets/Project.png';
import TimeOff from '../assets/Time.png';
import Fleet from '../assets/Fleet.png';
import Events from '../assets/Events.png';
import Surveys from '../assets/Surveys.png';
import Forum from '../assets/forum.png';
import TimeSheet from '../assets/Timesheet.png';
import Helpdesk from '../assets/helpdesk.png';
import Discuss from '../assets/discuss.png';
import Approvals from '../assets/approval.png';
import Website from '../assets/crm.png'; // Reused CRM icon
import Point from '../assets/point.png';
import Manufacturing from '../assets/Manufacturing.png';
import Maintenance from '../assets/Maintenance.png';
import Live from '../assets/livechat.png';

const modules = [
    { name: 'CRM', icon: CRM },
    { name: 'Sales', icon: Sales },
    { name: 'Invoicing', icon: Invoicing },
    { name: 'Expenses', icon: Expenses },
    { name: 'Inventory', icon: Inventory },
    { name: 'Accounting', icon: Accounting },
    { name: 'Purchase', icon: Purchase },
    { name: 'Employees', icon: Employees },
    { name: 'Recruitment', icon: Recruitment },
    { name: 'Project', icon: Project },
    { name: 'Time Off', icon: TimeOff },
    { name: 'Fleet', icon: Fleet },
    { name: 'Events', icon: Events },
    { name: 'Surveys', icon: Surveys },
    { name: 'Forum', icon: Forum },
    { name: 'TimeSheet', icon: TimeSheet },
    { name: 'Helpdesk', icon: Helpdesk },
    { name: 'Discuss', icon: Discuss },
    { name: 'Approvals', icon: Approvals },
    { name: 'Website', icon: Website },
    { name: 'Point Of Sale', icon: Point },
    { name: 'Manufacturing', icon: Manufacturing },
    { name: 'Maintenance', icon: Maintenance },
    { name: 'Live Chat', icon: Live },
];

export default function DemoForm() {
    const [selectedModules, setSelectedModules] = useState([]);
    const toggleModule = (moduleName) => {
        setSelectedModules((prev) =>
            prev.includes(moduleName)
                ? prev.filter((mod) => mod !== moduleName)
                : [...prev, moduleName]
        );
    };

    return (
        <div className="p-6 md:p-10 rounded-xl border border-[#7DAFFF] text-white w-full mx-auto my-5 ">
            {/* Form Inputs */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-16 mb-8 px-2 sm:px-4">

                <div className="w-full">
                    <label className="block mb-1 text-[#000066] font-semibold">Company Logo *</label>
                    <input
                        type="file"
                        accept="image/*"
                        className="w-full max-w-md h-[48px] border border-[#A7B1FF] rounded-[8px] bg-white px-[16px] py-[8px] text-[#6B7280] text-sm file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#000066] file:text-white hover:file:bg-[#1a1a99]"
                    />
                </div>


                <div className="w-full">
                    <label className="block mb-1 text-[#000066] font-semibold">Company Name *</label>
                    <input
                        type="text"
                        placeholder="Enter Company Name"
                        className="w-full max-w-md h-[48px] border border-[#A7B1FF] rounded-[8px] bg-white px-[16px] py-[8px] text-black outline-none"
                    />
                </div>
                <div className="w-full">
                    <label className="block mb-1 text-[#000066] font-semibold">Company Email *</label>
                    <input
                        type="text"
                        placeholder="Enter Company Email"
                        className="w-full max-w-md h-[48px] border border-[#A7B1FF] rounded-[8px] bg-white px-[16px] py-[8px] text-black outline-none"
                    />
                </div>
                <div className="w-full max-w-md">
                    <label className="block mb-1 text-[#000066] font-semibold">Phone Number *</label>
                    <PhoneInput
                        country={'eg'}
                        inputStyle={{
                            height: '48px',
                            borderRadius: '8px',
                            border: '1px solid #A7B1FF',
                            paddingLeft: '48px',
                            width: '100%',
                            color: 'black',
                            backgroundColor: '#FFFFFF',
                        }}
                        buttonStyle={{
                            backgroundColor: '#FFFFFF',
                            borderColor: '#A7B1FF',
                        }}
                        dropdownStyle={{
                            color: '#000066',
                            backgroundColor: '#FFFFFF',
                            fontFamily: 'Poppins',
                        }}
                        placeholder="Enter Phone Number"

                    />
                </div>

                <div className="w-full">
                    <label className="block mb-1 text-[#000066] font-semibold">Password *</label>
                    <input
                        type="text"
                        placeholder="Enter Password"
                        className="w-full max-w-md h-[48px] border border-[#A7B1FF] rounded-[8px] bg-white px-[16px] py-[8px] text-black outline-none"
                    />
                </div>

                <div className="w-full">
                    <label className="block mb-1 text-[#000066] font-semibold">Confirm Password *</label>
                    <input
                        type="text"
                        placeholder="Enter Password"
                        className="w-full max-w-md h-[48px] border border-[#A7B1FF] rounded-[8px] bg-white px-[16px] py-[8px] text-black outline-none"
                    />
                </div>
            </div>

            {/* Modules Grid */}
            <div className="mt-10">
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-5 gap-4 justify-center">
                    {modules.map((mod, index) => {
                        const isSelected = selectedModules.includes(mod.name);
                        return (
                            <div
                                key={index}
                                onClick={() => toggleModule(mod.name)}
                                className={`cursor-pointer w-[155px] sm:w-[191px] h-[68px] border 
            ${isSelected ? 'bg-[#E5EDFF] border-[#2B3FE8]' : 'bg-white border-gray-300'}
            rounded-[43px] px-[16px] py-[8px] flex items-center gap-[16px] 
            text-black shadow hover:shadow-lg transition`}
                            >
                                <img src={mod.icon} alt={mod.name} className="w-6 h-6 object-contain" />
                                <span title={mod.name}  className="font-[Poppins] font-medium text-[16px] leading-[100%] capitalize text-[#030315] truncate w-full block">
                                    {mod.name}
                                </span>
                            </div>
                        );
                    })}
                </div>
            </div>



            <div className="flex justify-end mt-10">
                <button
                    className="
                    w-full sm:w-[364px]
                    h-[46px]
                    rounded-[16px]
                    px-6 sm:px-[72px]
                    py-[8px]
                    bg-main
                    text-white
                    shadow-[4px_4px_12px_#00000029]
                    text-sm font-semibold
                    transition duration-200 ease-in-out
                    hover:bg-[#000099]
                    active:scale-95
                    "
                >
                    Submit Now
                </button>
            </div>

        </div>
    );
}