import type { LinksFunction } from "@remix-run/node";

import stylesUrl from "~/styles/global.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: stylesUrl },
];

import Game from '~/old-app/components/game';

const App: React.FC = () => <Game />

export default function IndexRoute() {
  return (<App />);
}

