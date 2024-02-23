import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
const Home = () => {
  const [passwordLength, setPasswordLength] = useState("8");
  const [showResult, setShowResult] = useState("");
  const [symbol, setSymbol] = useState(false);
  const [number, setNumber] = useState(false);
  const [lowerCase, setLowerCase] = useState(false);
  const [upperCase, setUpperCase] = useState(false);
  const generatePass = (e) => {
    e.preventDefault();
    let charset = "";
    let newPassword = "";

    if (symbol) charset += "!@#$%^&*()";
    if (number) charset += "0123456789";
    if (lowerCase) charset += "abcdefghijklmnopqrstuvwxyz";
    if (upperCase) charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 0; i < passwordLength; i++) {
      newPassword += charset.charAt(Math.floor(Math.random() * charset.length));
    }

    setShowResult(newPassword);
  };

  return (
    <>
      <h1>Geeksforgeeks</h1>
      <h2>Random Password Generator</h2>
      <form>
        <label>Password Length: </label>
        <input
          value={passwordLength}
          onChange={(e) => {
            setPasswordLength(e.target.value);
          }}
        />
        <input
          type="checkbox"
          checked={symbol}
          onChange={() => {
            setSymbol(!symbol);
          }}
        />
        <label>Symbols</label>
        <input
          type="checkbox"
          checked={number}
          onChange={() => {
            setNumber(!number);
          }}
        />
        <label>Numbers</label>
        <input
          type="checkbox"
          checked={lowerCase}
          onChange={() => {
            setLowerCase(!lowerCase);
          }}
        />
        <label>LowerCase</label>
        <input
          type="checkbox"
          checked={upperCase}
          onChange={() => {
            setUpperCase(!upperCase);
          }}
        />
        <label>UpperCase</label>
        <button onClick={generatePass}>Generate Password</button>
        <label>Generated Password: </label>
        <input value={showResult} disabled />
        <CopyToClipboard text={showResult}>
          <button type="button">Copy</button>
        </CopyToClipboard>
      </form>
    </>
  );
};
export default Home;
