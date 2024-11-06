import Logo from "../assets/Logo.png"

const Navlinks =[
{
   id:1,
   name:"Home",
   link : "/",
},
{
   id:2,
   name:"About",
   link : "/About",
},
{
   id:3,
   name:"Contact",
   link : "/Contact",
}
]

const Navbar =()=>{
return(
<>
<div className="bg-primary shadow-md">
   <div className="container flex justify-between py-4 sm:py-3 items-center">
      <div className="">
<img src={Logo} width={100}  alt="logo" />
      </div>
<div >
<ul className="flex items-center gap-8 text-center" >
{Navlinks.map(({id, name, link})=>(
      <li key={id}>
         <a href={link} className="inline-block hover:text-secondary font-general text-xl" >{name}</a>
      </li>
))
}
</ul>

</div>
   </div>

</div>
</>

)

}
export default Navbar