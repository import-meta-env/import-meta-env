import './import-meta-env';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.css';

export function App() {
  return <div>Hello: {import.meta.env.HELLO}</div>;
}

export default App;
