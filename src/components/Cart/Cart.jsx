const Cart = ({ cart }) => {
    const { recipe_name,preparing_time,calories} = cart || {}; 
    console.log(cart);
    return (
        <div>
            <tr>
                    <th>{1}</th>
                    <td>{recipe_name}</td>
                    <td>{preparing_time}</td>
                    <td>{calories}</td>
                    <td><button className="bg-green-600 btn">Preparing</button></td>
                  </tr>
        </div>
    );
};

export default Cart;
