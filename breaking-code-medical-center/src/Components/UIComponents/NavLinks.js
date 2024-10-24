import Link from "next/link";

const NavLinks = ({ user }) => {
  const navLinks = [
    { name: "Home", href: "/home" },
    { name: "Agenda", href: "/agenda" },
    { name: "Historia Clinica", href: "/hc", roles: ["MEDICO"] },
    { name: "Facturacion", href: "/facturacion", roles: ["ADMINISTRADOR"] },
    { name: "Liquidacion", href: "/liquidacion", roles: ["ADMINISTRADOR"] },
    { name: "Registrar Paciente", href: "/rp", roles: ["ADMINISTRADOR"] },
  ];

  const userRole = user?.role || "";

  const filteredNavLinks = navLinks.filter(link => {
    if (!link.roles) return true;

    return link.roles.includes(userRole);
  });

  return (
    <ul className="flex justify-center items-center gap-x-4 text-lg">
      {filteredNavLinks.map(({ name, href }) => (
        <li key={name}>
          <Link href={href} aria-label={`Ir a ${name}`}>{name}</Link>
        </li>
      ))}
    </ul>
  );
};
export default NavLinks;