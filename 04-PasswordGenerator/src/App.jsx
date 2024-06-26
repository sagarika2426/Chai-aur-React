import { useState, useEffect, useRef } from 'react';
import './App.css';

function App() {
  // State hooks
  const [length, setLength] = useState(12); // Default password length
  const [uppercase, setUppercase] = useState(true); // Toggle for uppercase letters
  const [lowercase, setLowercase] = useState(true); // Toggle for lowercase letters
  const [numbers, setNumbers] = useState(true); // Toggle for including numbers
  const [symbols, setSymbols] = useState(true); // Toggle for including symbols
  const [password, setPassword] = useState(''); // Generated password state
  const passwordRef = useRef(null); // Ref for password input

  // Function to generate password
  const passwordGenerator = () => {
    let charSet = '';
    let pass = '';

    if (uppercase) charSet += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (lowercase) charSet += 'abcdefghijklmnopqrstuvwxyz';
    if (numbers) charSet += '0123456789';
    if (symbols) charSet += '!@#$%^&*()_+-=[]{}|;:,.<>?';

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * charSet.length);
      pass += charSet.charAt(char);
    }

    setPassword(pass);
  };

  // Function to copy password to clipboard
  const copyPasswordToClipboard = () => {
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password);
    alert('Your password has been copied to the clipboard!');
  };

  // Effect to generate password whenever length or character options change
  useEffect(() => {
    passwordGenerator();
  }, [length, uppercase, lowercase, numbers, symbols]);

  // Inline styles for the background image
  const bgImageStyle = {
    backgroundImage: `url('https://uploads-ssl.webflow.com/61e737146fb07ee895b14516/61e737146fb07e7837b145e2_background-sign-in-tech-ui-kit-webflow-template.svg')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
  };

  // JSX for the UI
  return (
    <div style={bgImageStyle}>
      <div className="flex flex-col text-white lg:w-1/2">
        {/* Heading */}
        <header className="text-center mb-16 mt-5">
          <h1 className="text-4xl font-bold">Password Generator</h1>
          <p className="mt-2">Generate a personalized strong password</p>
        </header>

        {/* Container for the content */}
        <div className="w-full flex flex-col lg:flex-row justify-center items-center">
          {/* Password generator section */}
          <div className="w-full p-8 bg-gray-900 rounded-lg shadow-md py-16">
            {/* Password display and copy section */}
            <div className="flex items-center mb-4">
              {/* Password input field */}
              <input
                type="text"
                value={password}
                className="flex-1 py-2 px-3 rounded-l-lg text-gray-300 bg-gray-700 outline-none"
                placeholder="Generated Password"
                readOnly
                ref={passwordRef}
              />
              {/* Copy button */}
              <button
                className="bg-blue-600 text-white rounded-r-lg py-2 px-4 ml-2 hover:bg-blue-700"
                onClick={copyPasswordToClipboard}
              >
                Copy
              </button>
            </div>

            {/* Settings section */}
            <div className="flex flex-col md:flex-row md:items-center md:space-x-4 text-xl justify-between">
              {/* Password length slider */}
              <div className="flex-1">
                <label htmlFor="lengthRange" className="block mb-1 text-gray-400">
                  Password Length: {length}
                </label>
                <input
                  id="lengthRange"
                  type="range"
                  min={6}
                  max={30}
                  value={length}
                  className="w-full"
                  onChange={(e) => setLength(e.target.value)}
                />
              </div>

              {/* Checkboxes for character options */}
              <div className="flex flex-col text-xl">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="uppercaseCheckbox"
                    checked={uppercase}
                    onChange={() => setUppercase(!uppercase)}
                  />
                  <label htmlFor="uppercaseCheckbox" className="ml-2 text-gray-400">
                    Uppercase
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="lowercaseCheckbox"
                    checked={lowercase}
                    onChange={() => setLowercase(!lowercase)}
                  />
                  <label htmlFor="lowercaseCheckbox" className="ml-2 text-gray-400">
                    Lowercase
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="numbersCheckbox"
                    checked={numbers}
                    onChange={() => setNumbers(!numbers)}
                  />
                  <label htmlFor="numbersCheckbox" className="ml-2 text-gray-400">
                    Numbers
                  </label>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="symbolsCheckbox"
                    checked={symbols}
                    onChange={() => setSymbols(!symbols)}
                  />
                  <label htmlFor="symbolsCheckbox" className="ml-2 text-gray-400">
                    Symbols
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-gray-400 mt-auto mb-4">
          <p>&copy; 2024 Password Generator by Sagarika Sahoo</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
