import { useState } from "react";

// database
function HRDatabase(){
    const [fileError, setFileError] = useState("");

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const fileName = file.name;
            
            const fileExtension = fileName.substring(fileName.lastIndexOf('.')).toLowerCase();
            
            if (fileExtension !== ".xlsx" && fileExtension !== ".xls") {
                setFileError("Please select a valid Excel file (.xlsx or .xls)");
                e.target.value = "";
            } else {
                setFileError("");
            }
        }
    };

    const handleSubmit = (e) => {
        // prevent submission
        const fileInput = document.getElementById("import_database");
        if (!fileInput.files.length) {
            e.preventDefault();
            setFileError("select a file to import.");
        } else if (fileError) {
            e.preventDefault();
        }
    };

    return(
        <>
        {/* database */}
            <div className="flex flex-col md:justify-start md:items-start md:mx-10 bg-white md:mt-3">
                <form action="" method="post" onSubmit={handleSubmit}>
                    <label htmlFor="import database" className="font-sans capitalize text-sm py-2">
                        import database <br />
                        <span className="text-gray-500 text-xs">optional</span>
                        <br />
                        {/* upload file */}
                        <input 
                            type="file" 
                            name="import_database" 
                            id="import_database" 
                            accept=".xlsx, .xls" 
                            onChange={handleFileChange}
                            className="border border-gray-300 py-0 bg-white md:w-28 px-2" 
                        />
                        <br />
                        {/* error message*/}
                        {fileError ? (
                            <span className="text-xs font-sans text-red-600 lowercase">{fileError}</span>
                        ) : (
                            <span className="text-xs font-sans text-gray-800"><span className="text-red-500">*</span>upload excel file</span>
                        )}
                        <br />
                        <button type="submit" className="bg-blue-800 cursor-pointer hover:bg-blue-900 text-white font-sans text-xs  text-left lowercase md:py-2 md:px-5">import</button>
                    </label>
                </form>
            </div>
        </>
    )
}

export default HRDatabase
