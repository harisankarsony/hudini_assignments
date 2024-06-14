// component that displays the filtered products
export default function List({list}) {
    return (
      <ul>
        {list.map((product) => {
          return (
            <li key={product.id}>
              <img src={product.thumbnail} />
              <p>{product.title}</p>
              <p>Price: {product.price}</p>
            </li>
          )
        })
        }
      </ul>
    )
  }