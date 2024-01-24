import "@/styles/globals.css";
import { WebSocketProvider } from "@/utils/WebSocketContext";
import { Toaster } from "react-hot-toast";

export default function App({ Component, pageProps }) {
    return (
        <WebSocketProvider>
            <Toaster position="top-right" reverseOrder={true} />
            <Component {...pageProps} />;
        </WebSocketProvider>
    );
}
