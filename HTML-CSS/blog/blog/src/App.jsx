/*import React, { useEffect, useState } from "react";
import Header from "./componnents/Header";
import Main2 from "./componnents/main";
import Footer from "./componnents/footer";

function App() {
  return (
    <div>
      <Header />
      <Main2 />
      <Footer />
   </div>
 );
}*/
import Header from "./componnents/Header";
import Main2 from "./componnents/main";
import Footer from "./componnents/footer";
import { useEffect, useState } from "react";
import { supabase } from "./lib/helper/supabaseClient";

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const session = supabase.auth.getSession();
    setUser(session?.user);
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      switch (event) {
        case "SIGNED_IN":
          setUser(session?.user);
          break;
        case "SIGNED_OUT":
          setUser(null);
          break;
        default:
      }
    });
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  const login = async () => {
    await supabase.auth.signInWithOAuth({
      provider: "github",
    });
  };
  const logout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <div>
      <header>
        <Header />
        {user ? (
          <div>
            <h1>Authenticated</h1>
            <button className="auth-button" onClick={logout}>
              Logout
            </button>
          </div>
        ) : (
          <button className="auth-button" onClick={login}>
            Login with Github
          </button>
        )}
      </header>
      <main>
        <Main2 />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
