import Link from "next/link";

const NavLinks = ({ user }) => {
  const navLinks = [
    { name: "Home", href: "/home" },
    { name: "Agenda", href: "/agenda" },
    { name: "Historia Clinica", href: "/hc", role: "MEDICO" },
    { name: "Facturacion", href: "/facturacion" },
    { name: "Liquidacion", href: "/liquidacion" },
  ];

  return (
    <ul className="flex justify-center items-center gap-x-4 text-lg">
      {navLinks
        .filter(item => !(item.role && user?.role !== item.role))
        .map(({ name, href }) => (
          <li key={name}>
            <Link href={href} aria-label={`Ir a ${name}`}>{name}</Link>
          </li>
        ))}
    </ul>
  );
};

export default NavLinks;
