export type Data = {
    name: string,
    image: string,
    desc: string,
    price: number
}
const data: Data[] = [
    {
        name: 'Red Shirt',
        image: 'https://cdn.pixabay.com/photo/2016/10/02/22/17/red-t-shirt-1710578_1280.jpg',
        desc: 'A red t-shirt, perfect for days with non-red weather.',
        price: 29.99
    },
    {
        name: 'Blue Carpet',
        image:
            "https://images.pexels.com/photos/6292/blue-pattern-texture-macro.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
        desc: 'Fits your red shirt perfectly. To stand on. Not to wear it.',
        price: 99.99
    },
    {
        name: 'Coffee Mug',
        image:
            'https://images.pexels.com/photos/160834/coffee-cup-and-saucer-black-coffee-loose-coffee-beans-160834.jpeg?cs=srgb&dl=bean-beans-black-coffee-160834.jpg&fm=jpg',
        desc: 'Can also be used for tea!',
        price: 8.99
    },
    {
        name: 'The Book - Limited Edition',
        image:
            'https://images.pexels.com/photos/46274/pexels-photo-46274.jpeg?cs=srgb&dl=blur-blurred-book-pages-46274.jpg&fm=jpg',
        desc: "What the content is? Why would that matter? It's a limited edition!",
        price: 15.99
    },
    {
        name: 'PowerBook',
        image:
            'https://get.pxhere.com/photo/laptop-computer-macbook-mac-screen-water-board-keyboard-technology-air-mouse-photo-airport-aircraft-tablet-aviation-office-black-monitor-keys-graphic-hardware-image-pc-exhibition-multimedia-calculator-vector-water-cooling-floppy-disk-phased-out-desktop-computer-netbook-personal-computer-computer-monitor-electronic-device-computer-hardware-display-device-448748.jpg',
        desc: 'Awesome hardware in moderate price. Buy now before a new one is released!',
        price: 2299.99
    },
    {
        name: 'Pen & Paper',
        image: 'https://cdn.pixabay.com/photo/2015/10/03/02/14/pen-969298_1280.jpg',
        desc: "Can be used for role-playing (not the kind of role-playing you're thinking about...).",
        price: 5.49
    },
]

export default data;