import { signIn, signOut, useSession } from "next-auth/react";
import { trpc } from "../utils/trpc";

const NavLogIn: React.FC = () => {
    const { data: sessionData } = useSession();
  
    const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery(
      undefined, // no input
      { enabled: sessionData?.user !== undefined },
    );
  
    return (
      <div className="flex items-center">
        <div className="font-grotesk text-lg">
          {sessionData && <div>Logged in as {sessionData.user?.name}</div>}
          {/* {secretMessage && <span> - {secretMessage}</span>} */}
        </div>
        <button
          className="rounded-full px-10 py-3 font-semibold font-grotesk text-bold no-underline transition hover:bg-white/20"
          onClick={sessionData ? () => signOut() : () => signIn()}
        >
          {sessionData ? "Sign Out" : "Sign In"}
        </button>
      </div>
    );
  };

export default NavLogIn