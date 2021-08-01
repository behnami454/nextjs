import Link from 'next/link'


const Navbar = () => {
    return(
        <div>
            <div className="topnav" id="myTopnav">
                <Link href="/"><a href="#home" class="active">Home</a></Link>
                <Link href="/contact"><a href="#news">contact</a></Link>
                <Link href="/about"><a href="#about">About</a></Link> 
                <Link href="/users"><a hred="#users">users</a></Link>
                <a href="javascript:void(0);" class="icon" onclick="myFunction()">
                    <i class="fa fa-bars"></i>
                </a>
            </div>
        </div>
        
    )
}
export default Navbar;