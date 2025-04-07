import SingleFAQ from "../_sections/Single";

export default async function page({params}) {
    const {id} = await params;
  return (
    <div>
        <SingleFAQ id={id}/>
    </div>
  )
    
}
