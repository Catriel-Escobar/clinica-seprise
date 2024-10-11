import Link from "next/link"

const Headers = () => {
    const navLinks = [
        {name: "Home", href: "/"},
        {name: "Agenda", href: "/agenda"},
        {name: "Historia Clinica", href: "/hc"},
        {name: "Facturacion", href: "/facturacion"},
        {name: "Liquidacion", href: "/liquidacion"},
    ]

    return (
    <div className="flex justify-around items-center h-[70px] bg-[#87b9a5]">
        <div>
            Logo
        </div>
        <div>
            <ul className="flex justify-around items-center gap-x-4 text-gray-50">
                {navLinks.map( (item) =>
                    <li key={item.id}>
                        <Link href={item.href}>{item.name}</Link> 
                    </li> 
                    )}
            </ul>
        </div>
        <div>
            <div className="flex justify-center items-center w-[50px] h-[50px] rounded-full bg-white ">
                    CE
            </div>
        </div>
    </div>
  )
}

export default Headers