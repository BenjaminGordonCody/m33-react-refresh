export const PostCreator = ({ setPostContent, submitHandler }) => {
  return (
    <form onSubmit={submitHandler}>
      <input onChange={(e) => setPostContent(e.target.value)} />
      <button type="submit">Post</button>
    </form>
  );
};
