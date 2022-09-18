import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import UserContext from "../Contexts/userContext";
import PurchaseConfirmationStyle from "../../Styles/Purchase-confirmation-style";

export default function PurchaseConfirmation() {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  return (
    <PurchaseConfirmationStyle>
      <div>
        <h1>Confirme sua compra</h1>
        <div>
          <ul>
            <li>
              Rise nitro , 37 <span>$ 50</span>
            </li>
            <li>
              Air max 97, 33 <span>$ 75</span>
            </li>
            <li>
              Retro 7 Citrus, 38 <span>$ 30</span>
            </li>
          </ul>
          <span>Total : $ 500</span>
          <div>
            <button onClick={() => navigate("/finalize-order")}>
              Confirmar compra
            </button>
            <button onClick={() => navigate("/")}>
              Escolher mais produtos
            </button>
          </div>
        </div>
      </div>
    </PurchaseConfirmationStyle>
  );
}
