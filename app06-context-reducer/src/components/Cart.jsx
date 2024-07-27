import { Item } from "./Item";
import { useCart } from "../context/CartContext";

export const Cart = () => {

    const {products,total,amount, formatMoney} = useCart();

    return (
      <div className="cart">
        <h1 style={{ textAlign: "center" }}>
          {products.length > 0
            ? `ยอดชำระเงินรวม : ${formatMoney(total)} บาท`
            : "ไม่มีสินค้าในตะกร้า"}
        </h1>

        {/* key={data.id} = ส่งทีละตัว
        {...data} = ส่งทีละตัว */}
        <div>
          {products.map((data) => (
            <Item key={data.id} {...data} />
          ))}
        </div>
      </div>
    );
};