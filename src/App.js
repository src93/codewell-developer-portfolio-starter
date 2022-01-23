import { Route } from 'wouter';
import { Theme } from 'styles/theme';
import './App.css';

import { Landing } from 'pages/Landing/Landing';

function App() {
  return (
    <Theme>
      <Route path='/' component={ Landing } />
    </Theme>
  );
}

export default App;
