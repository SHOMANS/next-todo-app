import Link from "next/link";
import styles from "../styles/FollowersList.module.css";

function FollowersListComponent({ followers }) {
  return (
    <div className={styles.followerslistContainer}>
      <div>
        {followers.map((follower, index) => (
          <div
            className={styles.followerItem}
            data-testid={`follower-card-${index}`}
            key={`follower-card-${index}`}
          >
            {console.log(follower.picture)}
            {console.log(follower.picture.medium)}
            <img alt={follower.name.first} src={follower.picture.medium} />
            <div className={styles.followersDetails}>
              <div className={styles.followerItemName}>
                <h4>{follower.name.first}</h4> <h4>{follower.name.last}</h4>
              </div>
              <p>{follower.login.username}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="todo-footer">
        <Link href="/">Go Back</Link>
      </div>
    </div>
  );
}

export default FollowersListComponent;
