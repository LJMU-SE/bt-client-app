import "@/styles/globals.css";
import { WebSocketProvider } from "@/utils/WebSocketContext";

export default function App({ Component, pageProps }) {
    return (
        <WebSocketProvider>
            <Component {...pageProps} />;
        </WebSocketProvider>
    );
}
