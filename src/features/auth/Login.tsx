import { apiConn } from "apiconn";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAppStoreKey } from "stores/main";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const [error, setError] = useState<string | null>(null);

  const setToken = useAppStoreKey("setToken");
  const setUserInfo = useAppStoreKey("setUserInfo");

  const handleSubmit = async event => {
    event.stopPropagation();
    event.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const response = await apiConn.post("/auth/login/", {
        email,
        password
      });
      const { data } = response;
      if (data.status !== "success") {
        setError(data.message || "An error occured");
        return;
      }

      const { token, user } = data.content;

      setToken(token);
      setUserInfo(user.id, user.user_role, user.name, user.email);

      navigate("/app");
    } catch (e) {
      console.log(e);
      setError("An error occured");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section>
      <div className='mx-auto flex flex-col min-h-screen items-center justify-center bg-[#dae9dc] px-6 py-8 md:h-screen lg:py-0'>
        <Link
          to='/'
          className='mb-6 flex items-center text-2xl font-semibold text-gray-900 md:-mt-32'
        >
          AutoBlogger
        </Link>
        <div className='w-full rounded-lg bg-white shadow    sm:max-w-md md:mt-0 xl:p-0'>
          <div className='space-y-4 p-6 sm:p-8 md:space-y-6'>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900  md:text-2xl'>
              Log in to your account
            </h1>
            {error && (
              <div className='text-sm font-medium text-red-600'>{error}</div>
            )}
            <form
              onSubmit={handleSubmit}
              className='space-y-4 md:space-y-6'
              action='#'
            >
              <div>
                <label
                  htmlFor='email'
                  className='mb-2 block text-sm font-medium text-gray-900 '
                >
                  Your email
                </label>
                <input
                  className='block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-600 focus:ring-blue-600       sm:text-sm'
                  placeholder='Enter email'
                  required
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor='password'
                  className='mb-2 block text-sm font-medium text-gray-900 '
                >
                  Password
                </label>
                <input
                  type='password'
                  placeholder='••••••••'
                  className='darkd:bg-gray-700 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-blue-600 focus:ring-blue-600      sm:text-sm'
                  required
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>

              <button
                type='submit'
                disabled={loading}
                className='pin-center w-full rounded-lg bg-blue-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-300'
              >
                {loading ? "Loading..." : "Log in"}
                {/* <Spinner /> */}
              </button>
              <p className='text-sm font-light text-gray-500'>
                Don't have an account yet?{" "}
                <Link
                  to='/signup'
                  className='font-medium  text-blue-600 hover:underline'
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
