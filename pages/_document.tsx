import {Html, Head, Main, NextScript} from 'next/document'
import store from "@/redux/store";
import {Provider} from "react-redux";

export default function Document() {
    return (
        <Html lang="en">
            <Head/>
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}
