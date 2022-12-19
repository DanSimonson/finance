import styles from "./UserResult.module.css";

const UserResult = ({ user }) => {
  return (
    <article className={styles.article}>
      <h2>Name: {user.name}</h2>
      <p>Email: {user.email}</p>
      <p>ID: {user._id}</p>
    </article>
  );
};
export default UserResult;
