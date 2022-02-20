// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import NxWelcome from './nx-welcome';
import { NativeBaseProvider } from 'native-base';

export function App() {
  return (
    <NativeBaseProvider>
      <NxWelcome title="test" />
      <div />
    </NativeBaseProvider>
  );
}

export default App;
