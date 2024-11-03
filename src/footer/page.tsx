import Link from "next/link"

export default function Footer(){
    return(
        
        <div className="Footer">
            <ul className="Footer-buttons">
                <Link href={"/"}>
                <li>Home</li>
                </Link>
                <Link href={"/about-us"}>
                <li>about us</li>
                </Link>
                <Link href={"/contact-us"}>
                <li>contact us</li>
                </Link> 
                <Link href={"/jobs"}>
                <li>jobs</li>
                </Link>
            </ul>
        </div>
    )
}