import ImageView from "./imageView";
import TableView from "./tableview";
import UploadView from "./uploadView";

export default function Upload() {
  return (
    <div>
      <UploadView />
      <div className="flex justify-evenly mt-4">
        <ImageView />
        <TableView />
      </div>
    </div>
  );
}
