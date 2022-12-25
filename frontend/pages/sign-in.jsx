import { useRouter } from "next/router";
import { useState } from "react";
import Page from "../src/components/Page";
import { fetchJson } from "../src/lib/api";

const SignIn = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState({ loading: false, error: false });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus({ loading: true, error: false });
    try {
      const response = await fetchJson('/api/login', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      setStatus({ loading: false, error: false });
      console.log("sign-in:", response);
      router.push('/');
    } catch (error) {
      setStatus({ loading: false, error: true });
    }
  };

  return (
    <Page title="Sign In">
      <form onSubmit={handleSubmit}>
        <label htmlFor="email" className="block text-sm my-2 text-gray-600">
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
        <label htmlFor="password" className="block text-sm my-2 text-gray-600">
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
        {status.error && (
          <div className="text-red-700">Invalid credentials</div>
        )}
        {status.loading ? (
          <p>loading...</p>
        ) : (
          <button
            type="submit"
            className="bg-green-800 block text-gray-100 rounded px-4 py-2 my-4
        hover:bg-green-700"
          >
            Sign In
          </button>
        )}
      </form>
    </Page>
  );
};

export default SignIn;
