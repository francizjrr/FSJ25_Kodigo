import { useForm } from "react-hook-form";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";

/* ESTADO DE PROMISE:
pending (pendiente): estado inicial, ni cumplido ni rechazado - .
fulfilled (cumplida): lo que significa que la operación se completó con éxito - "RESOLVE".
rejected (rechazada): lo que significa que la operación falló. - "REJECT*/

export const Products = () => {
  const { register, handleSubmit, reset } = useForm();

  const fetchProducts = async () => {
    const productscollection = await getDocs(collection(db, "products"));
    console.log(productscollection);
  };

  const addProduct = async (data) => {
    console.log(data.name);
    console.log(parseInt(data.stock));
    console.log(parseFloat(data.price));

    let response = await addDoc(collection(db, "products"), {
      name: data.name,
      price: parseInt(data.price),
      stock: parseFloat(data.stock),
    });
    console.log(response);

    reset();
  };

  return (
    <>
      <h2>Products</h2>

      <form onSubmit={handleSubmit(addProduct)}>
        <section>
          <label>Product name:</label>
          <br />
          <input type="text" {...register("name")} required />
        </section>

        <section>
          <label>Price:</label>
          <br />
          <input type="text" {...register("price")} required />
        </section>

        <section>
          <label>Quantity:</label>
          <br />
          <input type="text" {...register("stock")} required />
        </section>
        <br />
        <button type="submit">
          <h3>Send</h3>
        </button>
      </form>
    </>
  );
};
