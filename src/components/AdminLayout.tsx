import Link from 'next/link'
import { useSession } from 'next-auth/react';
import { trpc } from '../utils/trpc';
import AdminStuffOne from './AdminStuffOne';


const AdminLayout: React.FC = () => {

    const { data: session } = useSession();
  
    console.log(session)

    return (
      <>
        <div className="container font-grotesk flex-row col-auto px-10 py-10">
          {session ?
            (session.user?.role !== "user" ?  
            <div>
                <div className="container flex-row text-3xl my-5">
                    Exclusive admin stuff
                </div>
                <div className="container flex-row">
                    <AdminStuffOne />
                    <h2>Admin stuff 1</h2>
                    <h2>Admin stuff 2</h2>
                    <h2>Admin stuff 3</h2>
                </div>
            </div>
            : <div>You are not allowed to view this data.</div>
            ) : <div>Please sign in to view this data.</div>
          }
        </div>
      </>
    )
  }

export default AdminLayout