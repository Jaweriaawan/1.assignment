export default async function Page(){
  await new Promise((resolve) => {
    setTimeout (resolve,5000);
  })

  return (
          
          <div>
          <h1 className=" mt-8 ml-4 font-serif text-3xl text-emerald-700  hover:text-emerald-800">NOTICE</h1><br />
          <p className="ml-4 text-xl font-thin text-emerald-900">Applications for admissions to the Academic Year 2025-26 are now open!</p>
          </div>
    
  )
}