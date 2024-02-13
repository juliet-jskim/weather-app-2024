import Image from "next/image"

export default function Header() {
    return(
        <>
            <div style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center', padding:'1em',width:'100%', position:'absolute'}}>
                <a href="/" style={{display:'flex', flexDirection:'row', alignItems:'center', justifyContent:'center', padding:'1em', gap:'1em', width:'100%'}}>
                    <Image
                        src={"/assets/icons/logo.svg"}
                        alt="logo image"
                        width={26}
                        height={26}
                    />
                    <p style={{fontFamily:'Gilroy-Bold', fontSize:'12px',color:'var(--black)'}}>RainCheck</p>
                </a>
            </div>
        </>
    )
}