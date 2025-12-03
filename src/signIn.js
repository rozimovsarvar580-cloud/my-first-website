import './signIn.css'
function SingIn(){
    return(
        <div className='form'> 
            <form action="#git">
            <input type="email" placeholder="email" />
            <input type="password" placeholder="Create-password" />
            <input type="password" placeholder="Confirm-password" />
            <button>sumbit</button>
        </form>
        </div>
       
    )
}
export default SingIn