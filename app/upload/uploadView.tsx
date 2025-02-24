export default function UploadView() {
  return (
    <div className="flex flex-col mt-4 items-center">
      <h1>Upload Transactions</h1>
      <div className="flex my-4">
        <input type="file" className="file-input" />
        <button className="btn btn-primary ml-4">Upload</button>
      </div>
    </div>
  );
}
