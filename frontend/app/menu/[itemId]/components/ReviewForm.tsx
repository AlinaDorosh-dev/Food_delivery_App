export default function ReviewForm() {
  return (
    <div>
      <form>
        <label htmlFor='review'>Your opinion is important. Please leave your review:</label>
        <textarea id='review' name='review' rows={4} cols={18} />
      </form>
    </div>
  );
}
