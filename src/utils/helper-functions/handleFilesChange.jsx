
export default async function handleFilesChange(e, setSelectedFiles, setValue, getValues) {
    const files = Array.from(e.target.files);
    
    const existingFiles = getValues("media") || []; // Get existing files 

  /* console.log([...existingFiles, ...files]); */
  
    const fileURLs = files.map((file) => URL.createObjectURL(file)); // Generate URLs for files
   /*  const files64base = await Promise.all(files.map((file) => convertToBase64(file))); */
    /* console.log(fileURLs, "fileURLs"); */
    
    setSelectedFiles((prevFiles) => [...prevFiles, ...fileURLs]); // Update preview
    setValue("media", [...existingFiles, ...files]); // Update form data
   /*  setValue("serviceImages", [...existingFiles, ...files64base]); // Update form data */
}
