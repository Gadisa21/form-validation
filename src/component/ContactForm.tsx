import {useForm} from "react-hook-form"

type FormValues ={
    username:string
    email:string
    message:string
}
function ContactForm() {
    const form=useForm<FormValues>()
    const {register,handleSubmit,formState}=form
    const {errors}=formState;
    

    const onSubmit=(data:FormValues)=>{
        console.log("Form submitted",data)
    }
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <label htmlFor="username">Username</label>
        <input type="text" id="usename" {...register("username",{required:{value:true,message:"username requred"}})} />
<p className="error">{errors.username?.message}</p>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" {...register("email",{pattern:{
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message:"invalid email address"
        },required:{value:true,
            message:"Email is required"
        }})} />
        <p className="error">{errors.email?.message}</p>

        <label htmlFor="channel">Message</label>
        <textarea  id="message" {...register("message",{required:{value:true,message:"message is required"}})} />
        <p  className="error">{errors.message?.message}</p>
        <button>Submit</button>
      </form>
      
    </div>
  );}


export default ContactForm;
