import { Links, LiveReload, Outlet } from "@remix-run/react";

export default function App() {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>Tic-tac-toe</title>
                <Links />
            </head>
            <body>
                <div id="root">
                    <Outlet />
                    <LiveReload />
                </div>
            </body>
        </html>
    );
}


