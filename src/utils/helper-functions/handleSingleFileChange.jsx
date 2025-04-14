
export default async function handleSingleFileChange(e, setSelectedFiles, setValue,name) {
    const file = Array.from(e.target.files)[0];
    if(!file)return;

       // Validate file type (optional)
       if (!file.type.startsWith("image/")) {
        alert("Please select a valid image file.");
        return;
    }

   /*  const existingFiles = getValues("media") || []; // Get existing files  */

    const fileURL = URL.createObjectURL(file); // Generate URLs for files

    setSelectedFiles(fileURL); // Update preview
    setValue(name, file); // Update form data
}
