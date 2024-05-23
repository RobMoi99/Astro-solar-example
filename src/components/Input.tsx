import React from 'react';

export default function Input({text,id}:{text:string,id:string}) {
  return (
      <div className="mb-3 w-96">
          <label
            htmlFor={id}
            
            className="flex flex-col font-semibold min-w-[4rem] w-[50%] max-w-[50%]"
          >
          {`${text}, max 2mb`}
          </label>
          <input
            
            onInputCapture={e =>  {
              console.log("onChange: ",e.target);
              
              /* if(e.target.files?.length && e.target.files[0].size > 2097152){
                 alert("Filen är för stor!");
                 e.target.value = "";
              } */
            }}
            
            accept=".xlsx,.xls,image/*,.doc, .docx,.ppt, .pptx,.txt,.pdf,.html"
            className="bg-zinc-50 relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-clip-padding px-3 py-[0.32rem] font-normal leading-[2.15] text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[border-inline-end-width:1px] file:[margin-inline-end:0.75rem] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none"
            id={id}
            name={id}
            required
            type="file"
          />
      </div>
  );
}