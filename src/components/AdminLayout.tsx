import Link from 'next/link'

const AdminLayout: React.FC = () => {
    return (
      <>
        <div className="container font-grotesk flex-row col-auto px-10 py-10">
          <div className="container flex-row text-3xl my-5">
            Exclusive admin stuff
          </div>
          {/* tRPC calls can be made here */}
          <div className="container flex-row">
            <h2>Admin stuff 1</h2>
            <h2>Admin stuff 2</h2>
            <h2>Admin stuff 3</h2>
          </div>
        </div>
      </>
    )
  }

export default AdminLayout