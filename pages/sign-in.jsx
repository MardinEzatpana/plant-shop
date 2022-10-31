import { useState } from "react";
import Page from "../src/components/Page";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("should submit:", { email, password });
  };

  return (
    <Page title="Sign In">
      <form onSubmit={handleSubmit}>
        <label for="email" className="block text-sm my-2 text-gray-600">
          Email
        </label>
        <input
          id="email"
          name="email"
          className="border rounded px-3 py-1 w-80"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label for="password" className="block text-sm my-2 text-gray-600">
          Password
        </label>
        <input
          id="password"
          name="password"
          className="border rounded px-3 py-1 w-80"
          type="password"
          required
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        <button
          type="submit"
          className="bg-green-800 block text-gray-100 rounded px-4 py-2 my-4
        hover:bg-green-700"
        >
          Sign In
        </button>
      </form>
    </Page>
  );
};

export default SignIn;
