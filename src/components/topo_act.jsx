import { FiPlus } from "react-icons/fi";
import { FaListUl } from "react-icons/fa";

function Topo({ show, act }) {
  return (
    <div className="topo">
      <button className={`${!show && "list"} btn`} onClick={() => act(!show)}>
        <span> {show ? <FiPlus /> : <FaListUl />}</span>
        {show ? "Cadastro" : "Listagem"}
      </button>
    </div>
  );
}

export default Topo;
