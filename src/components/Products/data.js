import product1 from '../../images/product-1.jpg'
import product2 from '../../images/product-2.jpg'
import product3 from '../../images/product-3.jpg'
import sweet1 from '../../images/sweet-1.jpg'
import sweet2 from '../../images/sweet-2.jpg'
import sweet3 from '../../images/sweet-3.jpg'

export const productData = {
    pizzas: [
        {
            img: {src: product1, alt: "Pizza"},
            name: "Artichoke",
            desc: "Tuscany thin crust, creamy pesto sauce,  whole milk mozzarella, beef, and diced cooked tomatoe.",
            price: "$19.99",
            button: 'Add to Cart'
        },
        {
            img: {src: product2, alt: "Pizza"},
            name: "Supreme",
            desc: "Mrinara sauce, basil, italian sausage, roma tomatoes, olives, and pesto.",
            price: "$15.99",
            button: 'Add to Cart'
        },
        {
            img: {src: product3, alt: "Pizza"},
            name: "Beef BBQ",
            desc: "Tuscany thin crust, whole milk mozzarella, sliced red onions,  beef, and drizzled with  sauce.",
            price: "$10.99",
            button: 'Add to Cart'
        }
    ],

    sweets: [
        {
            img: {src: sweet2, alt: "Donut"},
            name: "Doughlicious",
            desc: "Belgian chocolate glazed donuts covered in icing with sprinkles on top.",
            price: "$5.99",
            button: 'Add to Cart'
        },
        {
            img: {src: sweet3, alt: "Ice Cream"},
            name: "Caramel Monder",
            desc: "Vanilla ice cream covered with caramel and chocolate glaze topped with a coco sticks.",
            price: "$5.99",
            button: 'Add to Cart'
        },
        {
            img: {src: sweet1, alt: "Brownie"},
            name: "Brownie Bounch",
            desc: "Double fudge brownie squares topped with white chocolate places and macadamia nut.",
            price: "$5.99",
            button: 'Add to Cart'
        }
    ]
}
