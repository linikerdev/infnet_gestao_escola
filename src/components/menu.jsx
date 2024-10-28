import { NavLink } from "react-router-dom";

function Menu() {
  const menus = [
    { name: "Home", route: "/" },
    { name: "Cadastro", route: "/cadastro" },
    { name: "Teste", route: "/teste" },
  ];

  return (
    <nav className="menu">
      {menus.map((item, i) => (
        <NavLink
          key={i}
          to={item.route}
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "active" : ""
          }
        >
          {item.name}
        </NavLink>
      ))}
    </nav>
  );
}

export default Menu;
