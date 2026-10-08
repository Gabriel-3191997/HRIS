
function Settings(){
    return(
        <>
        <div className="flex flex-wrap md:justify-start md:items-start gap-5 bg-white h-auto">
            {/* <h1 className="md:py-3 font-sans md:text-3xl capitalize md:mx-10">
                account settings
            </h1> */}
            </div>
            <div className="flex flex-col md:justify-start md:my-0 my-3  md:items-start bg-white h-auto">
                <p className="py-3 font-sans text-sm md:mx-10">
                    Change user's account details
                </p>
                <form action="" method="post">
                    {/* account name */}
                    <div className="w-auto">
                        <input type="text" name="account_name" id="account_name" className="py-3 md:w-lg md:my-5 text-sm md:mx-10 border border-gray-800 bg-white md:px-3"  placeholder="account name"/>
                    </div>
                    {/* email address */}
                    <div className="w-auto">
                        <input type="email" name="email" id="email" className="py-3 text-sm md:w-lg md:my-5 md:mx-10 border border-gray-800 bg-white md:px-3"  placeholder="email address"/>
                    </div>
                    {/* password */}
                    <div className="w-auto">
                        <label htmlFor="password" className="font-sans lowercase md:my-2 text-sm md:mx-10"><span className="text-red-500">*</span>password</label>
                        <br />
                        <input type="password" name="account_name" id="account_name" className="py-3 text-sm md:w-lg md:my-5 md:mx-10 border border-gray-800 bg-white md:px-3"  placeholder="account name"/>
                    </div>
                    {/* confrim password */}
                    <div className="w-auto">
                        <label htmlFor="password" className="font-sans lowercase text-sm md:my-2 md:mx-10"><span className="text-red-500">*</span>confrim password</label>
                        <br />
                        <input type="password" name="account_name" id="account_name" className="py-3 md:w-lg md:my-5 md:mx-10 border border-gray-800 bg-white md:px-3"  placeholder="account name"/>
                    </div>
                    {/* submit */}
                    <div className="w-auto flex flex-wrap md:justify-end md:items-end md:mr-10">
                        <input type="submit" value="submit" className="py-3  bg-blue-800 px-5 cursor-pointer text-white font-sans text-md" />
                    </div>
                </form>
                {/* theme */}
                {/* dark mode */}
                <div className="flex flex-col md:justify-start md:items-start bg-white">
                    <div className="w-auto py-2">
                        <label htmlFor="darkmode" className="text-sm capitalize md:mx-10">
                            <input type="checkbox" name="darkmode" id="darkmode" /> darkmode</label>
                    </div>
                    {/* light mode */}
                    <div className="w-auto py-2">
                        <label htmlFor="lightmode" className="text-sm capitalize md:mx-10">
                            <input type="checkbox" name="lightmode" id="lightmode" /> lightmode</label>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Settings
