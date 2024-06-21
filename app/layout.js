import '../styles/index.scss'
import Footer from './components/footer';
import Header from "./components/header";
import ReduxProvider from './store/ReduxProvider';
import { Toast } from './toast';




export const metadata = {
  title: "Detty December",
  description: "Discover and book unforgettable festive events",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" 
    >
      <body>
      <ReduxProvider>
        {/* <Header /> */}
        {children}
        {/* <Footer /> */}
        <Toast />
        </ReduxProvider>
        </body>
    </html>
  );
}
