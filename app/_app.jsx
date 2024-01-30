import 'tailwindcss/tailwind.css';
import emailjs from 'emailjs-com';

emailjs.init("eKB9bGUsvbE937RGN");

function MyApp({ Component, pageProps }) {
    return <Component {...pageProps} />;
}

export default MyApp;