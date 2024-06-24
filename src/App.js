function ProductCategoryRow({ category }) {
    return (
        <tr>
            <th colSpan="2">
                {category}
            </th>
        </tr>
    );
}

function ProductRow({ product }) {
    const name = product.stocked ? product.name :
        <span style={{ color: 'red' }}>
            {product.name}
        </span>

    return (
        <tr>
            <td>{name}</td>
            <td>{product.price}</td>
        </tr>
    );
}

function ProductTable({ products }) {
    const rows = [];
    let lastCategory = null;

    products.forEach((product) => {
        if (product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                    category={product.category}
                    key={product.category} />
            );
        }
        rows.push(
            <ProductRow
                product={product}
                key={product.name} />
        );
        lastCategory = product.category;
    });
    return (
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    );
}

function SearchBar() {
    return (
        <form>
            <input type="text" placeholder="Search..." />
            <label>
                <input type="checkbox" />
                {' '}
                Show only products in stock
            </label>
        </form>
    );
}

function FilterableProductTable({ products }) {
    return (
        <div>
            <SearchBar />
            <ProductTable products={products} />
        </div>
    );
}

const PRODUCTS = [
    { category: "Frutas", price: "$1", stocked: true, name: "Apple" },
    { category: "Frutas", price: "$1", stocked: true, name: "Dragon fruit" },
    { category: "Frutas", price: "$2", stocked: false, name: "Passion fruit" },
    { category: "verduras", price: "$2", stocked: true, name: "Spinach" },
    { category: "verduras", price: "$4", stocked: false, name: "Pumpkin" },
    { category: "verduras", price: "$1", stocked: true, name: "Beans" }
];

export default function App() {
    return <FilterableProductTable products={PRODUCTS} />
};