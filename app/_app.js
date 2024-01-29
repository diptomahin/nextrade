import 'tailwindcss/tailwind.css';
import emailjs from 'emailjs-com';

emailjs.init("GLw01ClqMXi471y7-SIwd");

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default MyApp;