import { motion } from "framer-motion";
import { GrCart } from "react-icons/gr";
import Headings from "../components/Headings";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import Data from "../Data";
import { FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Posts = ({ posts, liked, setLiked, searchQuery }) => {


  // const filterPosts = (posts) => {
  //   if (!searchQuery) return posts; // Return all posts if no search query
  //   return posts.filter((post) =>
  //     post.name.toLowerCase().includes(searchQuery.toLowerCase())
  //   );
  // };


  // const filteredPosts = filterPosts(posts);


  const filterPosts = (posts) => {
    if (!searchQuery.trim()) return posts; // Show all posts if no search query
  
    return posts.filter((post) =>
      post.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };
  
  const filteredPosts = filterPosts(posts);

  console.log(searchQuery)
  console.log(filteredPosts)


  // Group posts by category
  const groupByCategory = (posts) => {
    return posts.reduce((acc, post) => {
      const { category } = post;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(post);
      return acc;
    }, {});
  };

  const groupedPosts = groupByCategory(filteredPosts);

  const addLiked = (id) => {
    // Check if the item is already liked
    const newItem = Data.find((item) => item.id === id);

    if (liked.some((item) => item.id === id)) {
      // If it's already liked, remove it from the liked array
      setLiked(liked.filter((item) => item.id !== id));
    } else {
      // Otherwise, add it to the liked array
      setLiked([...liked, newItem]);
    }
  };

  const isLiked = (id) => {
    // Check if the current item is in the liked array
    return liked.some((item) => item.id === id);
  };

  
  return (
    <div>
      <div className="container2">
        {filteredPosts.length > 0 ? (
          <>
            {Object.keys(groupedPosts).map((category) => (
              <div key={category}>
                <Headings heading={category} />
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
                  {groupedPosts[category].map((post) => (
                    <div key={post.id} className="item mb-4">
                      <div className="item-image rounded d-flex align-items-center justify-content-center">
                        <img src={post.image} loading="lazy" alt="" />

                        {post.discount ? (
                          <small className="discount">-{post.discount}%</small>
                        ) : (
                          ""
                        )}
                        <button className="add-to-cart  align-items-center gap-2">
                          <GrCart /> Add To Cart
                        </button>
                        <div className="action d-flex flex-column gap-2">
                          <button
                            className="round hover bg-white"
                            onClick={() => addLiked(post.id)}
                          >
                            {isLiked(post.id) ? (
                              <FaHeart size={20} />
                            ) : (
                              <CiHeart size={20} />
                            )}
                          </button>
                          <Link
                            to={`/shop/${post.name}`}
                            className="round hover bg-white"
                          >
                            <IoEyeOutline size={20} />
                          </Link>
                        </div>
                      </div>

                      {/* =======PRODUCT CONTENT STARTS HERE======= */}
                      <div className="item-details pt-2">
                        <Link
                          to={`/shop/${post.name}`}
                          className="fw-bolder nav-link"
                        >
                          {post.name}
                        </Link>
                        <div className="price d-flex align-items-center gap-3">
                          <small className={post.discount ? "strike" : ""}>
                            ${post.price}
                          </small>
                          {post.discount ? (
                            <small className="">
                              $
                              {`${
                                post.price - (post.discount / 100) * post.price
                              }`}
                            </small>
                          ) : (
                            ""
                          )}
                        </div>
                        <div className="star d-flex align-items-center gap-3">
                          <img src="../../Images/stars.png" width={70} alt="" />
                          <small>({post.totalRating})</small>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className="loading-p h-50 d-flex align-items-center justify-content-center p-5">
            <p className="">No results found for "<b>{searchQuery}</b>"</p>
          </div>
        )}
      </div>
      {/* <Toaster /> */}
    </div>
  );
};

export default Posts;
