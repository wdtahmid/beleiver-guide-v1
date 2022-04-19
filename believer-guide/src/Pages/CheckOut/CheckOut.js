import React from 'react';

const CheckOut = () => {
    return (
        <div>
            <div className="checkout-form">
                <h2 className='font-bold text-2xl mb-3'>Checkout Form</h2>
                <form className='flex flex-col gap-3 w-3/5'>
                    <div className="form-group">
                        <div className="form-sub-group flex">
                            <input className='p-2 border border-slate-500 rounded-md w-1/2' type="text" name="fname" id="fname" placeholder='First Name' />
                            <input className='p-2 border border-slate-500 rounded-md ml-2 w-1/2' type="text" name="lname" id="lname" placeholder='Last Name' />
                        </div>
                    </div>
                    <div className="form-group">
                        <input className='p-2 border border-slate-500 rounded-md w-full' type="email" name="email" id="email" placeholder='Your Email' />
                    </div>
                    <div className="form-group">
                        <input className='p-2 border border-slate-500 rounded-md w-full' type="tel" name="phone" id="phone" placeholder='Your Phone' />
                    </div>
                    <div className="form-group flex flex-col gap-2">
                        <div className="form-sub-group flex">
                            <input className='p-2 border border-slate-500 rounded-md w-1/2' type="text" name="address-one" id="address-one" placeholder='Address Line One' />
                            <input className='p-2 border border-slate-500 rounded-md ml-2 w-1/2' type="text" name="address-two" id="address-two" placeholder='Address Line two' />
                        </div>
                        <div className="form-sub-group flex">
                            <input className='p-2 border border-slate-500 rounded-md w-1/2' type="text" name="city" id="city" placeholder='Your City' />
                            <input className='p-2 border border-slate-500 rounded-md ml-2 w-1/2' type="text" name="country" id="country" placeholder='Your Country' />
                        </div>
                    </div>
                    <input className='w-36 bg-indigo-700 p-3 text-xl uppercase text-white' type="submit" value="Check Out" />
                </form>
            </div>
        </div>
    );
};

export default CheckOut;