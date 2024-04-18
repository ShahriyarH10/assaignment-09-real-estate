import React from 'react';

const Login = () => {
    const handleLogin = (e) => {
        e.prevenDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
    }
    return (
        <div>
            <div className="w-1/2 mx-auto border-2 border-violet-600 rounded-lg">
            <section className="p-6 dark:bg-gray-100 dark:text-gray-900">
                <form onSubmit={handleLogin} noValidate="" action="" className="container flex flex-col mx-auto space-y-12">
                    <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:bg-gray-50">
                        <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">Email</label>
                                <input name='email' id="email" type="email" placeholder="Email" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                            <div className="col-span-full sm:col-span-3">
                                <label htmlFor="email" className="text-sm">Password</label>
                                <input name='password' id="password" type="password" placeholder="Password" className="w-full rounded-md focus:ring focus:ring-opacity-75 dark:text-gray-50 focus:dark:ring-violet-600 dark:border-gray-300" />
                            </div>
                        </div>
                    </fieldset>
                    <button className="btn btn-primary">Login</button>
                </form>
            </section>
        </div>
        </div>
    );
};

export default Login;