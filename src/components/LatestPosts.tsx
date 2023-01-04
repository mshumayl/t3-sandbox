import Link from 'next/link'

const LatestPosts: React.FC = () => {
    return (
      <>
        <div className="container font-grotesk flex-row col-auto px-10 py-10">
          <div className="container flex-row text-3xl my-5">
            My latest posts
          </div>
          <div className="container flex-row">
            <h2>Post 1</h2>
            <h2>Post 2</h2>
            <h2>Post 3</h2>
          </div>
        </div>
      </>
    )
  }

export default LatestPosts