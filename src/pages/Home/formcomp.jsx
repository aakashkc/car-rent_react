import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';


function Formcomp() {
    // const options = [
    //     { value: 'AC Car', label: 'AC Car' },
    //     { value: 'Non AC Car', label: 'Non AC Car' },
    // ];
    const formik = useFormik({
        initialValues: {
            toaddress: '',
            fromaddress: '',
            date: '',
            time: '',
            option: '',
        },
        validationSchema: Yup.object().shape({
            fromaddress: Yup.string()
                .max(15, "Must be 15 Characters or less")
                .min(3, "Must be more than 15 characters")
                .required('Required'),

            toaddress: Yup.string()
                .max(15, "Must be 15 Characters or less")
                .min(3, "Must be more than 15 characters")
                .required('Required'),
            date: Yup.date()
                .min(new Date(), 'Date must be in YYYY-MM-DD ')
                .required('Date is required'),
            time: Yup.string()
                .required('Time is required')
                .matches(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/, 'Invalid time format'),
            option: Yup.string()
                .required('Option is required')
        }),
        onSubmit: (values, { resetForm }) => {
            console.log(values)
            resetForm();
        }
    })
    return (
       
            

            <form onSubmit={formik.handleSubmit} className='flex flex-wrap justify-center  space-x-2  w-full border'>
                <div className='flex flex-col h-[55px] w-[30%] border  '>
                    <input type='text' name="toaddress"
                        placeholder='FromAddress'
                        className={`px-[12px] py-[8px] border border-[#7c8a972a]  text-black bg-[#ffffff] h-[35px] w-full  ${formik.touched.toaddress && formik.errors.toaddress ? 'border-red-400' : 'border-gray-300'} `}
                        onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={formik.handleFocus}
                        value={formik.values.toaddress} />


                    {formik.touched.toaddress && formik.errors.toaddress && (<span className=' text-xs text-red-400 overflow-y-hidden'>
                        {formik.errors.toaddress}
                    </span>)}


                </div>
                <div className='flex flex-col h-[45px] w-[30%]'>
                    <input type='text' name="fromaddress"
                        placeholder='FromAddress'
                        className={`px-[12px] py-[8px] border border-[#7c8a972a]  text-black bg-[#ffffff] h-[35px] w-full  ${formik.touched.fromaddress && formik.errors.fromaddress ? 'border-red-400' : 'border-gray-300'} `}
                        onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={formik.handleFocus}
                        value={formik.values.fromaddress} />


                    {formik.touched.fromaddress && formik.errors.fromaddress && (<span className=' text-xs text-red-400 overflow-y-hidden'>
                        {formik.errors.fromaddress}
                    </span>)}


                </div>
                <div className='flex flex-col h-[45px] w-[30%]'>
                    <input type="date" name="date"
                        className={`px-[12px] py-[8px] border border-[#7c8a972a]  text-black bg-[#ffffff] h-[35px] w-full  ${formik.touched.date && formik.errors.date ? 'border-red-400' : 'border-gray-300'} `}
                        onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={formik.handleFocus}
                        value={formik.values.date}
                    />

                    {formik.touched.date && formik.errors.date && (<span className=' text-xs text-red-400 overflow-y-hidden'>
                        {formik.errors.date}
                    </span>)}

                </div>
                <div className='flex flex-col h-[45px] w-[30%]'>
                    <input type="time" name="time"
                        className={`px-[12px] py-[8px] border border-[#7c8a972a]  text-black bg-[#ffffff] h-[35px] w-full  ${formik.touched.time && formik.errors.time ? 'border-red-400' : 'border-gray-300'} `}
                        onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={formik.handleFocus}
                        value={formik.values.time}

                    />
                    {formik.touched.time && formik.errors.time && (<span className=' text-xs text-red-400 overflow-y-hidden'>
                        {formik.errors.time}
                    </span>)}


                </div>

                {/* <div className='flex flex-col h-[45px] w-[30%]'>

                    <input type="select" name="option"
                        className={`px-[12px] py-[8px] border border-[#7c8a972a]  text-black bg-[#ffffff] h-[35px] w-full  ${formik.touched.option && formik.errors.option ? 'border-red-400' : 'border-gray-300'} `}
                        onChange={formik.handleChange} onBlur={formik.handleBlur} onFocus={formik.handleFocus}
                        value={formik.values.option} >
                    
                        {options.map((option) => (
                            <option key={option.value} value={option.value}>
                                {option.label}
                            </option>
                        ))}
                    </input>
                    {formik.touched.option && formik.errors.option && (<span className=' text-xs text-red-400'>
                        {formik.errors.option}
                    </span>)}
                </div> */}


                <div className='flex flex-col h-[45px] w-[30%]'>

                    <button className='w-full font-[400] leading-[1.5] text-center text-md py-[0.375rem] px-3 text-[#fff] cursor-pointer bg-primary hover:bg-transparent rounded  border-transparent  border-2 hover:border-tertiary hover:text-tertiary'>Find Car</button>
                </div>

            </form>



    
    )
}

export default Formcomp
