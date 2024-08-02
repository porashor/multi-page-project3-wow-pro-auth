import { BiCertification } from "react-icons/bi"
import { CgCommunity } from "react-icons/cg"
import { MdAdminPanelSettings } from "react-icons/md"

export const navbar = [
    {
        name: "Home",
        link: "/"
    },
    {
        name: "Service",
        link: "service"
    },
    {
        name: "About",
        link: "about"
    },
    {
        name: "Products",
        link: "products"
    },
    {
        name: "Testimonial",
        link: "testimonial"
    },
    {
        name: "FAQ",
        link: "faq"
    },
]


export const Community = [
    {
        icon: <CgCommunity/>,
        name: "Membership Organisation",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, quasi voluptates quas eos esse enim.",
        button: "see more..."
    },
    {
        icon: <MdAdminPanelSettings/>,
        name: "Admission Agency",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit  sit amet consectetur adipisicing elit. Adipisci, quasi voluptates quas eos esse enim.",
        button: "see more..."
    },
    {
        icon: <BiCertification/>,
        name: "Certificate Provider",
        para: "Lorem ipsum dolor sit amet consectetur adipisicing elit  sit amet consectetur adipisicing elit. Adipisci, quasi voluptates quas eos esse enim.",
        button: "see more..."
    },
];
import image1 from "../assets/post/book1.jpg"
import image2 from "../assets/post/book2.jpg"
import image3 from "../assets/post/book3.jpg"

export const postData = [
    {
        name: 'Web development',
        author: "john clark",
        text: "this is  a newly released books that is the world famous capter and that certified by the w3 schools",
        time: "10:45 am",
        img: image1,
        star: [1,2,3,4]
    },
    {
        name: 'Digital Marketing',
        author: "Habib-ul-hossain",
        text: "a digital marketer can change the market value of any company and it can make a company well ranked stage and it's needed for all digital marketer",
        time: "12:12 pm",
        img: image2,
        star: [1,2,3]
    },
    {
        name: 'Cyber Security',
        author: "Mitchel marsh",
        text: "cyber security is most importent for all because any kinda website needed any types of transection that's why we need to protect our website",
        time: "02:00 am",
        img: image3,
        star: [1,2,3,4,5]
    },
    {
        name: 'Ethical Heaking',
        author: "Nicola Tesla",
        text: "ethical heaking is more important for all kinda website to protact their data and communications and that is make sure their proper service and protact their everything ",
        time: "12:12 pm",
        img: image2,
        star: [1,2,3]
    },
]




export const faq = [
    {
        ques: "Why are we taking all action for you?",
        ans: "Because we know about all students and we wanna make you perfect"
    },
    {
        ques: "How many course are certified?",
        ans: "all"
    },
    {
        ques: "is there support any kinda discount?",
        ans: "yes. that's all are season based"
    },
    {
        ques: "How many students are success in your platform?",
        ans: "almost 80% students are success in all of the marketplace "
    },
    {
        ques: "do you added new candidate in an old base?",
        ans: "no never"
    },
    {
        ques: "which course are you prefer most?",
        ans: "web development"
    },
    {
        ques: "which configeration you prefer most for web development?",
        ans: "intel i5 and minimum 8gb ddr4 ram and minimum 2gb graphics and gen8 or up"
    },
    {
        ques: "Why are we taking all action for you?",
        ans: "Because we know about all students and we wanna make you perfect"
    },
    {
        ques: "Why are we taking all action for you?",
        ans: "Because we know about all students and we wanna make you perfect"
    },
    {
        ques: "Why are we taking all action for you?",
        ans: "Because we know about all students and we wanna make you perfect"
    },
]




export const service = [
    {
        name: "Basic",
        time: "2days non-stop",
        page: "5 to 7",
        revesion: "8times revesion",
        color: "blue-700",
        price: "100$"
    },
    {
        name: "Balanced",
        time: "7days non-stop",
        page: "5 to 10",
        revesion: "15times revesion",
        color: "green-600",
        price: "500$"
    },
    {
        name: "Gold",
        time: "15days non-stop",
        page: "10 to 15",
        revesion: "non-stop",
        color: "yellow-800",
        price: "800$"
    },
    {
        name: "Platinam",
        time: "20days non-stop",
        page: "30",
        revesion: "non-stop",
        color: "red-600",
        price: "1000$"
    },
]